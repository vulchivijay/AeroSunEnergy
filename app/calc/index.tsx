'use client';

import { z } from 'zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const solarCalculatorSchema = z
  .object({
    monthlyUnits: z.coerce
      .number()
      .min(1, 'Monthly electricity consumption is required')
      .max(100000, 'Maximum allowed value is 100000 units'),

    installationCostPerKw: z.coerce
      .number()
      .min(10000, 'Installation cost must be at least ₹10,000')
      .max(100000, 'Installation cost cannot exceed ₹1,00,000'),

    sellingPricePerKw: z.coerce
      .number()
      .min(10000, 'Selling price must be at least ₹10,000')
      .max(200000, 'Selling price cannot exceed ₹2,00,000'),
  })
  .refine(
    (data) =>
      data.sellingPricePerKw >= data.installationCostPerKw,
    {
      path: ['sellingPricePerKw'],
      message:
        'Selling price should be greater than or equal to installation cost',
    }
  );

type FormData = z.infer<typeof solarCalculatorSchema>;

export default function SolarCalculator() {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(solarCalculatorSchema),
    mode: 'onChange',
    defaultValues: {
      monthlyUnits: 360,
      installationCostPerKw: 54300,
      sellingPricePerKw: 65000,
    },
  });

  const values = watch();

  const calculation = useMemo(() => {
    if (!isValid) return null;

    const recommendedKw = Math.max(
      1,
      Math.round(values.monthlyUnits / 120)
    );

    let subsidy = 0;

    if (recommendedKw === 1) {
      subsidy = 30000;
    } else if (recommendedKw === 2) {
      subsidy = 60000;
    } else {
      subsidy = 78000;
    }

    const totalInstallationCost =
      recommendedKw * values.installationCostPerKw;

    const totalSellingPrice =
      recommendedKw * values.sellingPricePerKw;

    const customerPayable =
      totalSellingPrice - subsidy;

    const profit =
      totalSellingPrice - totalInstallationCost;

    const profitMargin =
      (profit / totalSellingPrice) * 100;

    let profitStatus = 'Low';
    let profitColor = 'text-red-600';

    if (profitMargin >= 20) {
      profitStatus = 'Excellent';
      profitColor = 'text-green-600';
    } else if (profitMargin >= 10) {
      profitStatus = 'Average';
      profitColor = 'text-yellow-600';
    }

    return {
      recommendedKw,
      subsidy,
      totalInstallationCost,
      totalSellingPrice,
      customerPayable,
      profit,
      profitMargin,
      profitStatus,
      profitColor,
    };
  }, [values, isValid]);

  const currency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="border rounded-xl shadow-md p-6 bg-white">
        <h1 className="text-3xl font-bold mb-2">
          Solar Cost & Profit Calculator
        </h1>

        <p className="text-gray-500 mb-8">
          Estimate solar system size, subsidy,
          customer payable amount and profit.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <InputField
            label="Monthly Electricity Consumption (Units)"
            helperText="Average monthly electricity usage"
            error={errors.monthlyUnits?.message}
            register={register('monthlyUnits')}
          />

          <InputField
            label="Your Installation Cost per kW (₹)"
            helperText="Panels, inverter, wiring, labour etc."
            error={errors.installationCostPerKw?.message}
            register={register('installationCostPerKw')}
          />

          <InputField
            label="Customer Selling Price per kW (₹)"
            helperText="Amount charged to customer"
            error={errors.sellingPricePerKw?.message}
            register={register('sellingPricePerKw')}
          />
        </div>

        {!isValid && (
          <div className="mt-6 border border-red-300 bg-red-50 rounded-lg p-4 text-red-600">
            Please fix validation errors to view
            calculations.
          </div>
        )}

        {calculation && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <ResultCard
                title="Recommended Solar Capacity"
                value={`${calculation.recommendedKw} kW`}
              />

              <ResultCard
                title="Government Subsidy"
                value={currency(calculation.subsidy)}
              />

              <ResultCard
                title="Total System Selling Price"
                value={currency(
                  calculation.totalSellingPrice
                )}
              />

              <ResultCard
                title="Customer Pays After Subsidy"
                value={currency(
                  calculation.customerPayable
                )}
              />

              <ResultCard
                title="Total Installation Cost"
                value={currency(
                  calculation.totalInstallationCost
                )}
              />

              <ResultCard
                title="Your Profit"
                value={currency(calculation.profit)}
              />

              <ResultCard
                title="Profit Margin"
                value={`${calculation.profitMargin.toFixed(
                  2
                )}%`}
              />

              <ResultCard
                title="Profit Status"
                value={calculation.profitStatus}
                className={calculation.profitColor}
              />
            </div>

            <div className="mt-8 border rounded-lg p-4 bg-blue-50">
              <h3 className="font-semibold mb-3">
                Subsidy Rules
              </h3>

              <ul className="space-y-1 text-sm">
                <li>1 kW → ₹30,000 Subsidy</li>
                <li>2 kW → ₹60,000 Subsidy</li>
                <li>3 kW & Above → ₹78,000 Subsidy</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  helperText: string;
  error?: string;
  register: any;
};

function InputField({
  label,
  helperText,
  error,
  register,
}: InputFieldProps) {
  return (
    <div>
      <label className="font-medium block mb-2">
        {label}
      </label>

      <input
        type="number"
        {...register}
        className={`w-full border rounded-lg p-3 ${
          error
            ? 'border-red-500'
            : 'border-gray-300'
        }`}
      />

      <p className="text-xs text-gray-500 mt-1">
        {helperText}
      </p>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

type ResultCardProps = {
  title: string;
  value: string;
  className?: string;
};

function ResultCard({
  title,
  value,
  className = '',
}: ResultCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="text-sm text-gray-500">
        {title}
      </div>

      <div
        className={`text-xl font-bold mt-2 ${className}`}
      >
        {value}
      </div>
    </div>
  );
}