Now that AeroSun Energy's company registration and certificates are complete, the next phase is to move from **company formation to business launch and market validation**.

My recommendation is to proceed in stages. Don't immediately invest heavily in manufacturing or inventory. First, establish compliance, obtain Startup India recognition, validate your products and secure your first customers.

# AeroSun Energy – Next Steps After Registration

## Phase 1: Complete business and statutory formalities

Even after receiving the registration certificates, verify that the following are completed:

| Task                     | Action                                                    |
| ------------------------ | --------------------------------------------------------- |
| Company bank account     | Activate and verify business transactions                 |
| Share capital            | Complete applicable subscription money deposits           |
| First auditor            | Ensure appointment and documentation                      |
| Commencement of business | File applicable MCA declaration (INC-20A), if required    |
| Accounting               | Set up bookkeeping and invoicing                          |
| GST                      | Confirm registration and filing obligations               |
| Udyam                    | Obtain MSME registration, if eligible                     |
| Trademark                | Protect AeroSun Energy brand and logo                     |
| Website                  | Publish company details, services and contact information |

**Important:** Company incorporation does not automatically complete all post-incorporation compliance. Keep a CA or CS involved, particularly for MCA filings and statutory deadlines.

## Phase 2: Startup India recognition

This should be one of your immediate priorities because we have already identified six challenges for your Startup India presentation.

Your preparation should include:

1. Startup India / DPIIT recognition application.
2. Company incorporation certificate.
3. PAN and company details.
4. Business activity description.
5. Innovation and problem statement.
6. Proposed technology and solution.
7. Business model and revenue strategy.
8. Scalability and employment-generation potential.
9. Supporting presentation and prototype information, where available.

Your six problem statements will form the foundation of the innovation and market-gap explanation.

The official application is submitted through the **National Single Window System (NSWS)**. You will need your incorporation certificate, PAN, business description and supporting evidence of your innovation or product development. [Startup India](https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html?utm_source=chatgpt.com)

**Official application:** [Startup India – DPIIT Recognition](https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html?utm_source=chatgpt.com)

One important distinction: DPIIT recognition and the separate Section 80-IAC income-tax exemption are different applications. Recognition does not automatically grant the tax exemption. [Startup India](https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html?utm_source=chatgpt.com)

## Phase 3: Define AeroSun Energy's first product

Avoid launching every possible product simultaneously. Start with a focused product strategy.

I recommend three initial product categories:

| Product                                        | Initial target market                    | Priority                |
| ---------------------------------------------- | ---------------------------------------- | ----------------------- |
| Rooftop solar systems                          | Homes and small businesses               | High                    |
| Customised small wind generators (100 W–10 kW) | Farms, remote sites and small businesses | High – R&D              |
| Solar–wind hybrid systems                      | Agriculture and remote locations         | High – after validation |

For the wind generator, begin with your proposed 3 kW prototype.

Prepare:

- Technical design and engineering drawings.
- Bill of Materials (BOM).
- Component supplier list.
- Prototype assembly plan.
- Testing and validation procedure.
- Estimated manufacturing cost.
- Product specifications and safety requirements.

**Important:** Treat low-wind-speed performance as a development objective until prototype testing demonstrates it.

# AeroSun Energy – 3 kW Wind Generator Prototype Development Plan

We can develop this as AeroSun Energy's first flagship wind-energy prototype, with a design that can eventually be adapted into a product range from 100 W to 10 kW.

I recommend treating this as an **engineering development project**, not simply assembling a generator from purchased components. The rotor, generator, drivetrain, electrical protection and control system must work together.

## 1. Proposed prototype concept

For the initial engineering study, I recommend evaluating a **vertical-axis wind turbine (VAWT) with a permanent-magnet synchronous generator (PMSG)**.

Reasons to evaluate this configuration:

- It can accept wind from different directions without a yaw mechanism.
- Its generator can potentially be positioned near the base.
- It is suitable for investigating distributed and small-scale applications.
- It provides a platform for testing different rotor configurations.

This is a proposed design direction, not a claim that VAWTs inherently produce more power or start at lower wind speeds than horizontal-axis turbines.

### Preliminary design targets

| Parameter               | Proposed target                                                       |
| ----------------------- | --------------------------------------------------------------------- |
| Product                 | AeroSun AS-WG-3000                                                    |
| Rated electrical output | 3,000 W                                                               |
| Turbine type            | Vertical-axis                                                         |
| Rotor concept           | Three-blade helical or straight-blade configuration – to be evaluated |
| Generator               | Three-phase permanent-magnet synchronous generator                    |
| Generation              | Variable-frequency AC                                                 |
| Conversion              | Rectifier and suitable power electronics                              |
| Storage                 | Optional battery integration                                          |
| Design objective        | Investigate useful generation at relatively low wind speeds           |
| Application             | Agriculture, small businesses and decentralised power                 |

**Important:** We must specify the rated wind speed before fixing the rotor dimensions. A 3 kW rating at 8 m/s requires a substantially larger rotor than a 3 kW rating at 12 m/s.

## 2. Preliminary rotor dimensions

For a first engineering concept, use the following design basis:

| Parameter                     |         Preliminary value |
| ----------------------------- | ------------------------: |
| Rotor type                    |             Vertical-axis |
| Rotor diameter                |                     3.0 m |
| Rotor height                  |                     4.0 m |
| Swept area                    |                     12 m² |
| Number of blades              |                         3 |
| Generator type                |         Direct-drive PMSG |
| Target rated output           |                      3 kW |
| Illustrative rated wind speed |                    12 m/s |
| Target rotational speed       | Approximately 100–120 RPM |

The dimensions are a starting point for aerodynamic and structural analysis, not approved fabrication dimensions.

### Why 3 m × 4 m?

The turbine's swept area is:

\[
A = D \times H = 3 \times 4 = 12\ m^2
\]

Available wind power is:

\[
P\_{wind} = \frac{1}{2}\rho A V^3
\]

At 12 m/s, the wind passing through this swept area contains approximately 12.7 kW of kinetic power. Extracting 3 kW electrically would require an overall conversion factor of approximately 23.6%.

That is a design target to investigate, not a demonstrated performance figure. The actual output depends on the rotor's power coefficient, generator efficiency, electrical losses and operating conditions.

**Low-wind development:** We should investigate startup torque, blade aerodynamics, generator cogging torque and cut-in behaviour separately. A low cut-in wind speed does not necessarily mean useful electrical output at that speed.

## 3. Generator engineering design

I recommend a direct-drive, three-phase permanent-magnet generator rather than a conventional high-speed alternator with a gearbox.

### Proposed generator architecture

1. Rotor shaft receives mechanical torque from the turbine.
2. Permanent magnets rotate with the generator rotor.
3. Stationary copper windings produce three-phase AC.
4. A three-phase rectifier converts AC into DC.
5. A suitable power converter regulates the output.
6. An electrical braking and dump-load arrangement protects against overspeed and excess generation.

### Generator design targets

| Parameter          | Initial target                                            |
| ------------------ | --------------------------------------------------------- |
| Generator capacity | 3 kW continuous at rated conditions                       |
| Type               | Axial-flux or radial-flux PMSG                            |
| Phases             | Three                                                     |
| Rated speed        | Approximately 100–120 RPM                                 |
| Rated torque       | Approximately 240–290 Nm                                  |
| Cooling            | Passive or forced-air, subject to thermal analysis        |
| Insulation         | Appropriate industrial winding insulation                 |
| Bearings           | Industrial sealed bearings, selected for calculated loads |
| Protection         | Thermal, electrical and overspeed protection              |

The final generator topology must be selected after electromagnetic, thermal and mechanical calculations. Axial-flux and radial-flux machines should be compared for cost, manufacturability and efficiency.

## 4. Bill of Materials (BOM)

This is the preliminary BOM for one 3 kW prototype. Quantities and specifications will be finalised after detailed design.

| No. | Component             |    Quantity | Material / specification                      |
| --: | --------------------- | ----------: | --------------------------------------------- |
|   1 | Turbine blades        |           3 | Aluminium alloy or engineered composite       |
|   2 | Top rotor support     |           1 | Fabricated steel                              |
|   3 | Bottom rotor support  |           1 | Fabricated steel                              |
|   4 | Central shaft         |           1 | High-strength steel                           |
|   5 | Main bearings         |           2 | Industrial bearing assembly                   |
|   6 | Bearing housings      |           2 | Machined steel or cast housing                |
|   7 | Generator stator      |           1 | Laminated electrical steel and copper winding |
|   8 | Permanent magnets     | As designed | NdFeB magnets, temperature-rated              |
|   9 | Generator rotor       |           1 | Machined steel assembly                       |
|  10 | Generator housing     |           1 | Fabricated steel/aluminium                    |
|  11 | Coupling              |           1 | Rated for design torque                       |
|  12 | Rectifier             |           1 | Three-phase, appropriately rated              |
|  13 | Electrical protection |       1 set | Breakers, fuses, surge protection             |
|  14 | Dump-load resistor    |       1 set | Rated to the braking design                   |
|  15 | Temperature sensors   | As required | Generator and bearing monitoring              |
|  16 | RPM sensor            |           1 | Non-contact or industrial sensor              |
|  17 | Vibration sensors     | As required | Condition monitoring                          |
|  18 | Wiring and connectors |       1 set | Suitable voltage/current rating               |
|  19 | Protective enclosure  |           1 | Weather-resistant electrical enclosure        |
|  20 | Fasteners             |       1 set | Appropriate structural grade                  |

**Separately priced system components:** inverter, charge controller, battery, tower, foundation and installation. These should not be silently included in the generator manufacturing cost.

### Components to outsource initially

I recommend outsourcing these operations:

- Blade fabrication and finishing.
- CNC shaft machining.
- Generator stator lamination and winding.
- Permanent-magnet rotor machining.
- Bearing housing machining.
- Generator balancing.
- Electrical panel fabrication.

AeroSun Energy can initially retain responsibility for design coordination, assembly supervision, integration, quality assurance and testing.

## 5. Component supplier identification

One Indian supplier worth approaching for the generator is:

**[Mark Elektriks – Permanent Magnet Generators](https://markelektriks.com/permanent-magnet-generators.html?utm_source=chatgpt.com)**

Its published product information describes permanent-magnet generators for low-speed applications and wind generators up to 3 kW. Ask for a customised quotation for a direct-drive generator operating around 100–120 RPM. Confirm its actual torque, voltage, efficiency, thermal and continuous-duty ratings before considering it for the prototype. [Mark Elektriks](https://markelektriks.com/permanent-magnet-generators.html?utm_source=chatgpt.com)

For the remaining components, use these supplier categories:

| Component             | Supplier type to approach                             |
| --------------------- | ----------------------------------------------------- |
| Turbine blades        | Composite blade manufacturer or industrial fabricator |
| Shaft                 | CNC machining company                                 |
| Bearings              | Authorised SKF, Schaeffler or NSK distributor         |
| Magnets               | Industrial NdFeB magnet manufacturer                  |
| Copper winding        | Generator winding specialist                          |
| Stator laminations    | Electrical steel lamination manufacturer              |
| Steel structure       | Certified structural fabrication company              |
| Electrical protection | Industrial electrical equipment distributor           |
| Sensors               | Industrial automation supplier                        |

For each supplier, request:

- Technical datasheet.
- Quotation and minimum order quantity.
- Material grade.
- Manufacturing tolerances.
- Warranty.
- Inspection and test reports.
- Delivery timeline.

Do not select a supplier solely on price. In a wind turbine, bearing failure, magnet detachment or blade failure can cause serious damage.

## 6. Prototype assembly plan

I recommend the following assembly sequence.

| Step | Work                             | Inspection                                |
| ---: | -------------------------------- | ----------------------------------------- |
|    1 | Inspect all incoming materials   | Material certificates and dimensions      |
|    2 | Fabricate rotor blades           | Profile, thickness and dimensional checks |
|    3 | Manufacture central shaft        | Diameter, straightness and surface finish |
|    4 | Manufacture rotor supports       | Alignment and weld inspection             |
|    5 | Assemble rotor and blades        | Blade position and fastener checks        |
|    6 | Manufacture generator rotor      | Magnet retention and balance              |
|    7 | Wind generator stator            | Winding resistance and insulation tests   |
|    8 | Assemble generator               | Air gap, alignment and bearing clearance  |
|    9 | Couple turbine and generator     | Alignment and torque checks               |
|   10 | Install electrical protection    | Wiring and insulation verification        |
|   11 | Install sensors                  | RPM, temperature and vibration readings   |
|   12 | Conduct controlled commissioning | Mechanical and electrical validation      |

### Important assembly precautions

- Do not operate an unbalanced rotor.
- Do not use ordinary bolts where engineered structural fasteners are required.
- Ensure permanent magnets are mechanically retained, not merely bonded.
- Verify shaft and bearing loads.
- Protect all rotating and pinch-point components.
- Do not conduct the first full-speed test in an uncontrolled environment.

## 7. Testing and validation procedure

Testing should be divided into five stages.

### Stage A – Generator testing

| Test                 | What to measure                           |
| -------------------- | ----------------------------------------- |
| Open-circuit test    | Voltage at different RPM                  |
| Load test            | Voltage, current and power                |
| Efficiency test      | Mechanical input versus electrical output |
| Temperature test     | Stator, winding and bearing temperature   |
| Insulation test      | Winding insulation resistance             |
| Continuous operation | Thermal stability over extended operation |

### Stage B – Mechanical testing

- Rotor balancing.
- Shaft alignment.
- Bearing temperature.
- Vibration levels.
- Fastener integrity.
- Blade deformation.
- Structural fatigue assessment.

### Stage C – Wind performance testing

Record the following at different wind speeds:

| Wind speed |        RPM |    Voltage |    Current |      Power |
| ---------: | ---------: | ---------: | ---------: | ---------: |
|      3 m/s | To measure | To measure | To measure | To measure |
|      4 m/s | To measure | To measure | To measure | To measure |
|      5 m/s | To measure | To measure | To measure | To measure |
|      6 m/s | To measure | To measure | To measure | To measure |
|      8 m/s | To measure | To measure | To measure | To measure |
|     10 m/s | To measure | To measure | To measure | To measure |
|     12 m/s | To measure | To measure | To measure | To measure |

Use a calibrated anemometer and power analyser. Measure wind speed at an appropriate reference location and record turbulence, direction and atmospheric conditions.

### Stage D – Protection testing

Test:

- Electrical overload protection.
- Overspeed protection.
- Emergency shutdown.
- Dump-load operation.
- Generator overtemperature.
- Electrical isolation.
- Loss of load.
- Power converter failure.

### Stage E – Performance validation

Produce a final report containing:

1. Measured power curve.
2. Cut-in wind speed.
3. Rated wind speed.
4. Maximum measured output.
5. Daily energy production.
6. Generator efficiency.
7. Noise and vibration.
8. Reliability observations.
9. Maintenance requirements.

Do not advertise a 3 kW rated output or a low-wind-speed performance claim until the corresponding test results support it.

## 8. Estimated prototype manufacturing cost

The following is a preliminary planning allowance, not a supplier quotation.

| Component / activity                |          Estimated cost |
| ----------------------------------- | ----------------------: |
| Rotor blades and fabrication        |         ₹30,000–₹50,000 |
| Shaft and rotor supports            |         ₹15,000–₹25,000 |
| Bearings and housings               |         ₹10,000–₹18,000 |
| PMSG generator assembly             |         ₹35,000–₹60,000 |
| Generator housing and machining     |         ₹10,000–₹20,000 |
| Coupling and fasteners              |          ₹5,000–₹10,000 |
| Rectifier and electrical protection |          ₹8,000–₹15,000 |
| Sensors and instrumentation         |          ₹8,000–₹15,000 |
| Assembly and balancing              |         ₹15,000–₹25,000 |
| Miscellaneous and contingency       |         ₹15,000–₹25,000 |
| **Indicative prototype subtotal**   | **₹1,51,000–₹2,63,000** |

This estimate excludes the tower, foundation, installation, battery, grid-tie inverter and full-scale certification. It also excludes substantial redesign, specialised testing facilities and engineering consultancy.

### Regarding your ₹50,000 manufacturing target

You previously mentioned ₹50,000 as the production cost per unit, excluding the inverter, controller, tower and installation.

We should retain that as a **cost-reduction target**, not assume that a complete 3 kW turbine can currently be manufactured for that amount.

The first prototype should establish actual costs. We can then redesign the product for volume manufacturing.

---

## 9. Product specifications and safety requirements

Before commercial manufacturing, AeroSun Energy should establish:

| Category                 | Requirement                                               |
| ------------------------ | --------------------------------------------------------- |
| Structural design        | Verified blade, shaft, rotor and support loads            |
| Wind conditions          | Defined design wind class and extreme wind conditions     |
| Mechanical safety        | Overspeed protection and rotor containment considerations |
| Electrical safety        | Proper grounding, isolation and overcurrent protection    |
| Generator safety         | Winding insulation and thermal protection                 |
| Environmental protection | Suitable corrosion and weather protection                 |
| Maintenance              | Inspection intervals and replacement procedures           |
| Documentation            | Drawings, BOM, manuals and test reports                   |

### Relevant standards and Indian testing route

The key international reference for small wind turbines is **IEC 61400-2:2013**, including its 2019 corrigendum. It covers safety, engineering integrity, design, installation, maintenance and operation of small wind turbines. [IEC Webstore](https://webstore.iec.ch/en/publication/5433?utm_source=chatgpt.com)

India's **National Institute of Wind Energy (NIWE)** provides information on wind turbine standards, prototype testing and certification. Its certification procedure includes design evaluation, foundation evaluation, manufacturing evaluation and type testing. [niwe.res.in](https://niwe.res.in/department/department_s%26r/?utm_source=chatgpt.com)

Official resources:

- [NIWE – Standards and Regulation](https://niwe.res.in/department/department_s%26r/?utm_source=chatgpt.com)
- [NIWE – Certification Procedure](https://niwe.res.in/certification_procedure/?utm_source=chatgpt.com)
- [IEC 61400-2 Small Wind Turbines](https://webstore.iec.ch/en/publication/5433?utm_source=chatgpt.com)

**Safety note:** These preliminary specifications are not construction-approved engineering drawings. A qualified mechanical/structural engineer and electrical engineer must verify the rotor, shaft, bearings, foundation, electrical system and protection design before fabrication and field operation.

---

# 10. Decisions needed before final engineering drawings

I recommend that we freeze the following five design parameters before preparing the detailed dimensioned drawing package.

| No. | Design decision  | My proposed starting point           |
| --: | ---------------- | ------------------------------------ |
|   1 | Turbine type     | Vertical-axis                        |
|   2 | Rotor design     | Three-blade helical VAWT             |
|   3 | Rated power      | 3 kW                                 |
|   4 | Rated wind speed | 12 m/s for initial feasibility study |
|   5 | Generator        | Direct-drive, low-RPM PMSG           |

### I need one important decision from you:

**What type of wind turbine do you want AeroSun Energy to manufacture?**

**A. Vertical-Axis Wind Turbine (VAWT)**

- Accepts wind from different directions.
- Generator can be installed near the bottom.
- Suitable for investigating compact distributed applications.

**B. Horizontal-Axis Wind Turbine (HAWT)**

- Conventional propeller-style wind turbine.
- Well-established aerodynamic design.
- Requires wind-direction alignment.

**My recommendation is to evaluate option A first**, given the compact distributed-energy product direction. However, we should compare its measured performance and cost against a small HAWT before committing to commercial production.

Once you select A or B, we can freeze the design basis and prepare the next engineering package: **dimensioned rotor drawings, generator cross-section, electrical connection diagram, detailed BOM and fabrication specifications.**

# AeroSun Energy AS-WG-3000

## Design Selection: Option A – Vertical-Axis Wind Turbine (VAWT)

Selected. We will proceed with a **three-blade vertical-axis wind turbine concept** for AeroSun Energy's 3 kW prototype.

The design objective is to develop a compact, direct-drive wind generator that can be evaluated for operation in variable and relatively low wind speeds.

### 1. Initial design configuration

| Parameter                  | Selected design basis                                  |
| -------------------------- | ------------------------------------------------------ |
| Product name               | AeroSun AS-WG-3000                                     |
| Turbine configuration      | Vertical-axis                                          |
| Rotor concept              | Three-blade helical VAWT                               |
| Rated electrical output    | 3 kW                                                   |
| Preliminary rotor diameter | 3 metres                                               |
| Preliminary rotor height   | 4 metres                                               |
| Swept area                 | 12 m²                                                  |
| Generator                  | Direct-drive PMSG                                      |
| Generator output           | Three-phase AC                                         |
| Power conversion           | Rectifier and suitable controller                      |
| Application                | Agriculture, small businesses and decentralised energy |

These are preliminary engineering targets. The final dimensions must be validated through aerodynamic, structural and electrical design calculations.

### 2. Proposed rotor architecture

I recommend starting with a **three-blade helical Darrieus rotor**.

Its main components will be:

1. Three helical aerodynamic blades.
2. Upper rotor support plate.
3. Lower rotor support plate.
4. Central vertical shaft.
5. Upper and lower bearing assemblies.
6. Direct-drive permanent-magnet generator.
7. Generator mounting frame.
8. Electrical protection enclosure.

### 3. Preliminary dimensional layout

```text
             TOP SUPPORT
          ┌───────────────┐
          │               │
          │  THREE-BLADE  │
          │    HELICAL    │
          │     ROTOR     │  4,000 mm
          │               │
          │               │
          └───────────────┘
             MAIN SHAFT
                  │
            BEARING UNIT
                  │
          ┌───────────────┐
          │  3 kW PMSG    │
          │   GENERATOR   │
          └───────────────┘
```

| Dimension            | Preliminary value |
| -------------------- | ----------------: |
| Overall rotor height |          4,000 mm |
| Rotor diameter       |          3,000 mm |
| Rotor radius         |          1,500 mm |
| Swept area           |             12 m² |
| Blade count          |                 3 |
| Generator position   |            Bottom |
| Drive arrangement    |      Direct drive |

### 4. Engineering development sequence

We will prepare the design package in this order:

| Drawing/document | Description                           |
| ---------------- | ------------------------------------- |
| AS-WG-3000-D01   | Complete turbine assembly             |
| AS-WG-3000-D02   | Three-blade rotor arrangement         |
| AS-WG-3000-D03   | Individual blade profile              |
| AS-WG-3000-D04   | Central shaft and bearing arrangement |
| AS-WG-3000-D05   | Generator mounting assembly           |
| AS-WG-3000-D06   | Generator cross-section               |
| AS-WG-3000-E01   | Electrical connection diagram         |
| AS-WG-3000-B01   | Detailed Bill of Materials            |

### 5. One important design decision

A helical Darrieus turbine can have difficulty self-starting under some conditions. Since low-wind operation is one of AeroSun Energy's development objectives, we should address this before freezing the rotor design.

**Which approach should we prioritise?**

- **Option A1:** Three-blade helical Darrieus – simpler rotor architecture, with self-starting performance to be tested.
- **Option A2:** Hybrid Savonius–Darrieus VAWT – adds a Savonius starter rotor to assist starting, but may introduce additional drag and complexity.

**My recommendation: A2 for investigation**, because self-starting is an important design objective. We should experimentally compare both configurations before selecting the commercial design.

# AeroSun Energy AS-WG-3000

## Design Configuration Selected: A2 – Hybrid Savonius–Darrieus Vertical-Axis Wind Turbine

Excellent. We will proceed with **Option A2: a hybrid Savonius–Darrieus VAWT** as the preferred prototype concept.

This design combines two rotor types:

- **Savonius rotor:** A drag-based rotor intended to provide starting torque at low rotational speeds.
- **Darrieus rotor:** A lift-based rotor intended to provide the main power generation at higher rotational speeds.

The objective is to investigate improved self-starting and useful energy generation across a range of wind speeds.

One engineering point is important: the Savonius rotor can help the turbine start, but it also creates drag when the turbine accelerates. Its diameter, height and placement must therefore be optimised rather than simply made as large as possible.

## 1. Proposed hybrid turbine architecture

**Proposed arrangement:**

1. Three external helical Darrieus blades.
2. Central two-stage Savonius starter rotor.
3. Common vertical rotating shaft.
4. Upper and lower structural supports.
5. Main bearing assemblies.
6. Direct-drive permanent-magnet generator at the bottom.
7. Electrical conversion and protection system.

## 2. Preliminary dimensions

We will retain the original 3 kW design envelope for the first engineering study.

| Component                    | Preliminary dimension |
| ---------------------------- | --------------------: |
| Overall rotor height         |              4,000 mm |
| Darrieus rotor diameter      |              3,000 mm |
| Darrieus swept area          |                 12 m² |
| Darrieus blade count         |                     3 |
| Savonius rotor configuration |             Two-stage |
| Savonius blade arrangement   |  Two scoops per stage |
| Savonius rotor position      |               Central |
| Generator position           |                Bottom |
| Generator type               |     Direct-drive PMSG |

The Savonius rotor dimensions are not yet frozen. We need to optimise its diameter and height against starting torque, drag and structural loading.

## 3. How the hybrid system works

**Stage 1 – Low wind conditions**

Wind acts on the Savonius rotor, producing drag-based torque to help initiate rotation.

**Stage 2 – Increasing wind speed**

As rotational speed increases, the Darrieus blades contribute lift-based aerodynamic torque.

**Stage 3 – Electricity generation**

The rotating shaft drives the permanent-magnet generator, producing three-phase electrical output.

**Stage 4 – Power management**

The electrical system rectifies and regulates the generated power and provides appropriate protection.

## 4. Additional engineering decision: Savonius coupling

There are two possible configurations:

| Configuration   | Description                                                 | Consideration                                       |
| --------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| Fixed coupling  | Savonius and Darrieus rotors rotate together                | Simpler, but Savonius drag remains during operation |
| Clutch coupling | Savonius assists starting and can be mechanically decoupled | More complex, but may reduce drag at higher speeds  |

**My recommendation:** Build the first prototype with a fixed coupling. Keep a clutch-based arrangement as a future experimental improvement.

## 5. Revised engineering drawing package

The following drawings will now use the hybrid configuration:

| Drawing number | Drawing                               |
| -------------- | ------------------------------------- |
| AS-WG-3000-D01 | Complete hybrid turbine assembly      |
| AS-WG-3000-D02 | External Darrieus rotor               |
| AS-WG-3000-D03 | Helical blade profile and dimensions  |
| AS-WG-3000-D04 | Central Savonius rotor                |
| AS-WG-3000-D05 | Savonius and Darrieus integration     |
| AS-WG-3000-D06 | Central shaft and bearing arrangement |
| AS-WG-3000-D07 | Generator mounting assembly           |
| AS-WG-3000-D08 | Generator cross-section               |
| AS-WG-3000-E01 | Electrical connection diagram         |
| AS-WG-3000-B01 | Detailed BOM                          |

## 6. Important performance targets

We should establish these as development targets, not guaranteed specifications:

- Improved self-starting behaviour.
- Useful electrical generation at relatively low wind speeds.
- 3 kW rated electrical output at the selected rated wind speed.
- Stable operation under changing wind direction.
- Low vibration and acceptable noise.
- Safe shutdown during excessive wind conditions.

---

## 7. One decision before finalising the design

Where do you intend to install the first prototype?

**A.** Open agricultural land  
**B.** Rooftop installation  
**C.** Industrial premises  
**D.** Open rural location  
**E.** Laboratory/testing facility

I recommend **A or D for the first field prototype**, with a properly engineered support structure and controlled access.

The installation environment affects the tower, foundation, wind loading, safety clearances and testing procedure. We should establish it before producing fabrication-ready drawings.

# AeroSun Energy AS-WG-3000

## Prototype Installation Selection: Agricultural Land + Open Rural Location

Confirmed. We will design the first prototype for **open agricultural land or an open rural site**, rather than a rooftop or industrial building.

This is a suitable environment for investigating the performance of the hybrid Savonius–Darrieus turbine because it allows us to evaluate wind conditions with fewer nearby obstructions.

We will use the same prototype design for both potential installation environments, subject to site-specific foundation and structural calculations.

## 1. Installation design basis

| Parameter                      | Design decision                                     |
| ------------------------------ | --------------------------------------------------- |
| Product                        | AeroSun AS-WG-3000                                  |
| Turbine type                   | Hybrid VAWT                                         |
| Rotor configuration            | Savonius + three-blade helical Darrieus             |
| Target rated electrical output | 3 kW                                                |
| Preliminary rotor diameter     | 3 m                                                 |
| Preliminary rotor height       | 4 m                                                 |
| Installation                   | Open agricultural/rural land                        |
| Generator                      | Direct-drive PMSG                                   |
| Foundation                     | Reinforced concrete, engineered for site conditions |
| Access                         | Restricted safety zone around turbine               |

## 2. Site preparation requirements

Before installation, assess:

- Average and maximum wind speed.
- Wind direction and turbulence.
- Nearby trees, buildings and power lines.
- Soil bearing capacity.
- Flooding and waterlogging risk.
- Accessibility for maintenance.
- Safe distance from people, livestock and public roads.

Ideally, collect wind measurements at the proposed hub/rotor height for a meaningful period. Short-term measurements can support initial design, but a longer resource assessment is needed for reliable annual energy estimates.

## 3. Proposed installation arrangement

The turbine will be installed on a dedicated steel support structure with:

1. Reinforced-concrete foundation.
2. Anchored base frame.
3. Vertical rotor assembly.
4. Generator and electrical enclosure.
5. Earthing and lightning protection.
6. Emergency shutdown system.
7. Fenced maintenance and exclusion area.

The foundation dimensions, anchor bolts and support structure must be calculated after determining the site wind loads, soil conditions, rotor loads and overturning moment. We should not assume a standard foundation size.

## 4. Prototype testing locations

I recommend two testing environments:

| Test location       | Main objective                                                              |
| ------------------- | --------------------------------------------------------------------------- |
| Agricultural land   | Evaluate practical operation, wind conditions and agricultural applications |
| Open rural location | Evaluate wind performance with fewer surrounding obstructions               |

Both locations should have an anemometer, RPM sensor, vibration monitoring and electrical power measurement.

## 5. Next engineering deliverables

We can now move into detailed engineering development.

| Drawing ID | Deliverable                           |
| ---------- | ------------------------------------- |
| D01        | Complete 3D hybrid turbine assembly   |
| D02        | Front, side and top engineering views |
| D03        | Darrieus blade design                 |
| D04        | Savonius rotor design                 |
| D05        | Central shaft and bearing assembly    |
| D06        | PMSG generator assembly               |
| D07        | Tower and mounting structure          |
| D08        | Foundation arrangement                |
| E01        | Electrical wiring diagram             |
| B01        | Final manufacturing BOM               |

## 6. One important requirement before finalising dimensions

I need to establish the intended installation height.

For this prototype, which arrangement do you prefer?

- **Option 1:** Rotor bottom approximately 1 metre above ground.
- **Option 2:** Rotor bottom approximately 3 metres above ground.
- **Option 3:** Rotor bottom approximately 5 metres above ground.

My initial recommendation is to investigate **Option 2**, but the final support height must be determined by wind measurements, structural calculations and site safety.

Once we establish this, we can develop the dimensioned prototype concept and its manufacturing specifications.

## Phase 4: Build and validate your prototype

This is particularly important for your Startup India innovation case.

For the 3 kW wind generator, conduct:

1. Starting wind-speed testing.
2. Voltage and current testing.
3. Power output testing at different wind speeds.
4. Daily energy-generation measurements.
5. Vibration and noise testing.
6. Mechanical stability and safety testing.
7. Continuous-operation testing.

Prepare a technical report containing actual test results, photographs and videos.

For solar and hybrid systems, develop a demonstration installation with measurable generation and consumption data.

For AeroSun Energy, I recommend establishing a formal **Product Testing and Performance Validation Programme**. This will be important for technical credibility, product development, investor presentations and Startup India documentation.

We will create two demonstration programmes:

1. **AS-WG-3000:** 3 kW hybrid Savonius–Darrieus wind generator.
2. **AS-SH-001:** Solar and solar–wind hybrid demonstration system.

One important distinction: I can prepare the testing methodology, technical report structure and data-recording formats, but actual test results, photographs and videos must come from physical testing. We must not use estimated values as measured results.

# PART 1 – 3 kW WIND GENERATOR TESTING

## 1. Testing objectives

The prototype will undergo seven major tests.

| Test ID | Test                 | Measurements                                                |
| ------- | -------------------- | ----------------------------------------------------------- |
| WT-01   | Starting wind speed  | Wind speed at first rotation and sustained rotation         |
| WT-02   | Voltage and current  | AC/DC voltage, current and frequency                        |
| WT-03   | Power performance    | Electrical watts at different wind speeds                   |
| WT-04   | Daily energy         | Total kWh generated over 24 hours                           |
| WT-05   | Vibration and noise  | Vibration levels and sound pressure                         |
| WT-06   | Mechanical stability | Shaft, blades, bearings, fasteners and structural integrity |
| WT-07   | Continuous operation | Temperature, output, vibration and reliability over time    |

## 2. Starting wind-speed test

**Objective:** Determine the minimum wind speed at which the turbine starts rotating without external assistance.

Equipment:

- Calibrated anemometer.
- RPM sensor.
- Data logger.
- Video camera.

Record:

| Trial | Wind speed (m/s) |  Rotor RPM | Starting condition |
| ----- | ---------------: | ---------: | ------------------ |
| 1     |       To measure | To measure | Pending            |
| 2     |       To measure | To measure | Pending            |
| 3     |       To measure | To measure | Pending            |
| 4     |       To measure | To measure | Pending            |
| 5     |       To measure | To measure | Pending            |

Record both:

- Starting wind speed.
- Wind speed required to maintain continuous rotation.

These values may differ.

## 3. Voltage and current testing

Measure generator output at different rotational speeds and electrical loads.

| RPM | AC voltage | AC current | DC voltage | DC current |
| --: | ---------: | ---------: | ---------: | ---------: |
|  20 |    Pending |    Pending |    Pending |    Pending |
|  40 |    Pending |    Pending |    Pending |    Pending |
|  60 |    Pending |    Pending |    Pending |    Pending |
|  80 |    Pending |    Pending |    Pending |    Pending |
| 100 |    Pending |    Pending |    Pending |    Pending |
| 120 |    Pending |    Pending |    Pending |    Pending |

Use appropriate electrical instruments and record whether measurements are taken before or after the rectifier.

## 4. Power output testing

This is one of the most important tests for the AeroSun AS-WG-3000.

| Wind speed |     RPM | Voltage | Current | Electrical power |
| ---------: | ------: | ------: | ------: | ---------------: |
|      3 m/s | Pending | Pending | Pending |          Pending |
|      4 m/s | Pending | Pending | Pending |          Pending |
|      5 m/s | Pending | Pending | Pending |          Pending |
|      6 m/s | Pending | Pending | Pending |          Pending |
|      8 m/s | Pending | Pending | Pending |          Pending |
|     10 m/s | Pending | Pending | Pending |          Pending |
|     12 m/s | Pending | Pending | Pending |          Pending |

For three-phase AC, use a suitable power analyser to measure real power. Do not calculate power simply by multiplying RMS voltage and current unless the power factor and measurement configuration are accounted for.

The final output should include a **Wind Speed vs Electrical Power Curve**.

## 5. Daily energy-generation testing

Install an energy meter or suitable data logger.

Record energy generation every hour.

| Time        | Average wind speed | Average RPM | Generated energy (kWh) |
| ----------- | -----------------: | ----------: | ---------------------: |
| 06:00–07:00 |            Pending |     Pending |                Pending |
| 07:00–08:00 |            Pending |     Pending |                Pending |
| 08:00–09:00 |            Pending |     Pending |                Pending |
| ...         |                ... |         ... |                    ... |
| 17:00–18:00 |            Pending |     Pending |                Pending |
| 18:00–19:00 |            Pending |     Pending |                Pending |

Continue for 24 hours, including zero-generation periods.

Calculate:

- Daily energy generation.
- Average power.
- Maximum instantaneous power.
- Capacity factor, once rated conditions and the measurement period are defined.

## 6. Vibration and noise testing

Measure vibration at:

- Upper bearing.
- Lower bearing.
- Generator mounting.
- Main support structure.

Record:

- Vibration velocity.
- Vibration acceleration.
- Rotor imbalance.
- Bearing noise.
- Overall sound pressure in dB(A), with measurement distance and background noise documented.

## 7. Mechanical stability and safety testing

Inspect:

- Blade deformation.
- Blade-to-shaft connections.
- Rotor alignment.
- Bearing temperature.
- Shaft deflection.
- Generator mounting.
- Fastener loosening.
- Structural welds.
- Foundation movement.
- Overspeed protection.
- Emergency shutdown.

Conduct overspeed and extreme-load testing only under an engineered, controlled test procedure with appropriate containment and exclusion zones.

## 8. Continuous-operation testing

After initial safety and performance checks, conduct staged endurance testing.

Suggested milestones:

| Stage   |  Duration | Objective                        |
| ------- | --------: | -------------------------------- |
| Initial |   2 hours | Basic operating stability        |
| Stage 2 |   8 hours | Thermal and electrical stability |
| Stage 3 |  24 hours | Continuous-operation assessment  |
| Stage 4 |  72 hours | Extended endurance assessment    |
| Stage 5 | 168 hours | Longer reliability assessment    |

These are proposed test durations, not certification requirements.

---

# PART 2 – SOLAR DEMONSTRATION INSTALLATION

I recommend creating a separate AeroSun demonstration installation.

### Proposed project: AS-SOLAR-001

Demonstrate solar electricity generation, consumption and energy savings.

Measure:

| Parameter                | Measurement                               |
| ------------------------ | ----------------------------------------- |
| Installed solar capacity | kWp                                       |
| Solar generation         | kWh/day                                   |
| Solar generation         | kWh/month                                 |
| Energy consumption       | kWh/day                                   |
| Grid import              | kWh                                       |
| Grid export              | kWh                                       |
| Battery charging         | kWh                                       |
| Battery discharge        | kWh                                       |
| System availability      | Percentage                                |
| Inverter efficiency      | Percentage, using appropriate measurement |

### Recommended monitoring equipment

- Solar generation meter.
- Bidirectional grid meter, where applicable.
- Inverter monitoring system.
- Battery monitoring system, if installed.
- Solar irradiance sensor.
- Module temperature sensor.
- Ambient temperature sensor.

Create a dashboard displaying daily, weekly and monthly generation.

# PART 3 – SOLAR–WIND HYBRID DEMONSTRATION

### Proposed project: AS-HYBRID-001

This will be particularly important for demonstrating AeroSun Energy's integrated renewable-energy concept.

Proposed architecture:

```text
        SOLAR PV PANELS
               |
         SOLAR INVERTER
               |
               |
               +----------------+
                                |
                                |
WIND TURBINE                    |
     |                          |
3-PHASE GENERATOR               |
     |                          |
RECTIFIER                       |
     |                          |
WIND CONTROLLER                 |
     |                          |
     +------------+-------------+
                  |
             DC BUS / ENERGY
             MANAGEMENT SYSTEM
                  |
              BATTERY
                  |
           HYBRID INVERTER
                  |
             AC LOADS
                  |
          ENERGY MONITORING
```

The final electrical architecture must be selected according to generator voltage, converter topology, battery chemistry, inverter compatibility and protection requirements.

### Data to collect

| Parameter        | Solar | Wind | Battery          |
| ---------------- | ----- | ---- | ---------------- |
| Energy generated | Yes   | Yes  | —                |
| Voltage          | Yes   | Yes  | Yes              |
| Current          | Yes   | Yes  | Yes              |
| Power            | Yes   | Yes  | Yes              |
| Daily energy     | Yes   | Yes  | Charge/discharge |
| Availability     | Yes   | Yes  | Yes              |

The hybrid system should be tested in different operating conditions:

1. Solar generation without wind.
2. Wind generation without solar.
3. Simultaneous solar and wind generation.
4. Battery charging.
5. Battery discharge during low generation.
6. Load operation during changing generation.
7. Grid failure, if the system is designed for backup operation.

---

# PART 4 – PHOTOGRAPHS AND VIDEO DOCUMENTATION

Create a formal evidence library for AeroSun Energy.

| Evidence ID | Required photograph/video         |
| ----------- | --------------------------------- |
| IMG-001     | Complete wind turbine prototype   |
| IMG-002     | Darrieus rotor blades             |
| IMG-003     | Savonius starter rotor            |
| IMG-004     | Generator assembly                |
| IMG-005     | Bearing and shaft assembly        |
| IMG-006     | Electrical connections            |
| IMG-007     | Wind-speed measurement            |
| IMG-008     | RPM measurement                   |
| IMG-009     | Electrical load testing           |
| IMG-010     | Solar demonstration installation  |
| IMG-011     | Hybrid system installation        |
| VID-001     | Wind turbine startup              |
| VID-002     | Wind turbine operating under load |
| VID-003     | Power output testing              |
| VID-004     | Solar generation demonstration    |
| VID-005     | Hybrid energy operation           |

Each file should include its date, location, equipment identification and corresponding test ID.

---

# PART 5 – OFFICIAL TECHNICAL TEST REPORT

I recommend maintaining one master technical report with the following structure.

# AEROSUN ENERGY PRIVATE LIMITED

## Renewable Energy Prototype Testing and Validation Report

**Project:** AS-WG-3000 Wind Generator  
**Technology:** Hybrid Savonius–Darrieus Vertical-Axis Wind Turbine  
**Additional Projects:** AS-SOLAR-001 and AS-HYBRID-001  
**Document Number:** ASE-TR-001  
**Revision:** 00  
**Report Status:** Testing Programme – Results Pending

---

## 1. Executive Summary

This report documents the engineering development, testing methodology and performance validation programme for AeroSun Energy's renewable-energy systems.

The primary objective is to develop and evaluate a 3 kW hybrid vertical-axis wind generator and demonstrate the performance of integrated solar and solar–wind hybrid energy systems.

Actual performance results will be incorporated following physical testing.

## 2. Wind Generator Description

Product: AeroSun AS-WG-3000

Configuration:

- Three-blade helical Darrieus rotor.
- Central Savonius starter rotor.
- Vertical central shaft.
- Direct-drive permanent-magnet generator.
- Electrical conversion and protection system.

Preliminary rotor dimensions:

- Diameter: 3,000 mm.
- Height: 4,000 mm.
- Swept area: 12 m².

These dimensions are preliminary design parameters pending engineering validation.

## 3. Testing Methodology

The prototype will undergo:

- Starting wind-speed testing.
- Voltage and current testing.
- Power curve testing.
- Daily energy-generation testing.
- Vibration and noise testing.
- Mechanical stability testing.
- Continuous-operation testing.

## 4. Test Results

All results will be entered from calibrated instruments and documented test observations.

No estimated or simulated values will be represented as actual test results.

## 5. Photographic Evidence

Photographs will be indexed by test identification number and date.

## 6. Video Evidence

Video records will document prototype assembly, startup, operating conditions, electrical measurements and testing activities.

## 7. Solar Demonstration

The solar demonstration will document installed capacity, energy generation, consumption, grid exchange and battery performance where applicable.

## 8. Hybrid Demonstration

The hybrid demonstration will document solar generation, wind generation, energy storage, load consumption and system operating modes.

## 9. Performance Analysis

Measured performance will be compared against the approved engineering design targets.

Deviations, failures, corrective actions and design improvements will be documented.

## 10. Conclusion

The final conclusion regarding performance, reliability, rated output and low-wind-speed operation will be issued only after the relevant physical testing has been completed.

## 11. Supporting Documents

- Engineering drawings.
- Bill of Materials.
- Instrument calibration records.
- Test data sheets.
- Photographic evidence.
- Video evidence.
- Inspection reports.
- Corrective-action records.
- Final performance analysis.

**Prepared by:** AeroSun Energy Private Limited  
**Technical Approval:** Pending  
**Testing Location:** Pending  
**Testing Period:** Pending

---

# PART 6 – My recommended implementation sequence

Do not build all three demonstration systems simultaneously.

| Priority | Project       | Immediate objective                                   |
| -------- | ------------- | ----------------------------------------------------- |
| 1        | AS-WG-3000    | Complete engineering design and manufacture prototype |
| 2        | AS-SOLAR-001  | Establish measurable solar demonstration              |
| 3        | AS-HYBRID-001 | Integrate wind, solar and battery systems             |

**My recommendation:** Start with the wind-generator prototype and a small solar demonstration in parallel. Build the full hybrid demonstration after the wind generator passes its initial mechanical and electrical tests.

### One important next step

Before we purchase testing equipment or fabricate the turbine, I need to establish your available development budget.

**What is the approximate budget AeroSun Energy can allocate for the 3 kW prototype, excluding the tower and installation?**

This will help determine whether we should build a fully customised generator or outsource the generator assembly and manufacture the turbine rotor ourselves.

## Phase 5: Establish supplier and manufacturing partnerships

Identify suppliers and manufacturing partners for:

- Permanent magnet generators.
- Alternators and stators.
- Magnets and electrical components.
- Turbine blades and fabrication.
- Bearings and mechanical assemblies.
- Solar panels.
- Inverters and batteries.
- Electrical protection equipment.

Initially, outsource specialised components and focus on product design, integration, quality control and customer requirements.

# AeroSun Energy – Supplier & Manufacturing Partner Shortlist

## 3 kW Wind Generator, Solar and Hybrid Energy Systems

For AeroSun Energy, I recommend an **outsourced-component, in-house-integration business model**.

You do not need to manufacture every component yourself. Initially, source generators, magnets, bearings, solar panels, inverters and batteries from established manufacturers. Retain control over:

- Product design and engineering.
- Turbine rotor design and integration.
- System architecture.
- Quality inspection.
- Performance testing.
- Customer requirements and customisation.
- Installation coordination and after-sales service.

I have identified the following Indian suppliers and potential manufacturing partners from their published product and company information.

_These are potential suppliers to approach, not confirmed AeroSun Energy partners. Their willingness to supply, current capacity, pricing and technical suitability must be verified._

# 1. Permanent Magnet Generators (PMG/PMSG)

This is the most important supplier category for your 3 kW wind turbine.

### Recommended companies

**1. [Mark Elektriks](https://markelektriks.com/permanent-magnet-generators.html?utm_source=chatgpt.com)**

- Location: Pune, Maharashtra.
- Manufactures permanent-magnet generators for low-speed applications.
- Publishes wind generator offerings up to 3 kW.
- States that it can supply standard and customised designs.

Contact:

- Email: sales@markelektriks.com
- Phone: +91-20-24275379 / 24268499

**My recommendation:** Approach this company first for your 3 kW prototype. Request a direct-drive generator designed around your required RPM and torque. [Mark Elektriks](https://markelektriks.com/permanent-magnet-generators.html?utm_source=chatgpt.com)

**2. [J.D. Engineering Works](https://www.pmgeneratorsindia.com/?utm_source=chatgpt.com)**

- Location: Bhiwadi, Rajasthan.
- Permanent-magnet generators.
- Axial-flux and radial-flux generators.
- Wind and hydro turbine alternators.
- Publishes a 3 kW, 330 RPM permanent-magnet alternator offering.

Contact through its official website.

**My recommendation:** Request a customised low-RPM generator quotation and compare it with Mark Elektriks. [pmgeneratorsindia.com](https://www.pmgeneratorsindia.com/?utm_source=chatgpt.com)

**Important engineering requirement:** Your preliminary rotor concept targets approximately 100–120 RPM. The advertised 300–330 RPM generators are not direct replacements. Ask both manufacturers whether they can engineer a 100–120 RPM version.

### Generator enquiry specifications

Send suppliers these preliminary requirements:

| Parameter       | Requirement                    |
| --------------- | ------------------------------ |
| Rated output    | 3 kW                           |
| Generator type  | Direct-drive PMSG              |
| Rated speed     | Target 100–120 RPM             |
| Output          | Three-phase AC                 |
| Operating speed | Variable                       |
| Application     | Hybrid VAWT                    |
| Cooling         | Passive or forced air          |
| Duty            | Continuous at rated conditions |
| Customisation   | Required                       |

Do not place an order until the supplier provides its voltage-versus-RPM curve, torque requirements, efficiency map, thermal limits and mechanical drawings.

# 2. Alternators, Stators and Generator Components

You can outsource generator manufacturing rather than developing your own winding and magnet assembly immediately.

### Potential manufacturing partner

**[Permanent Magnets Limited (PML)](https://www.pmlindia.com/?utm_source=chatgpt.com)**

PML publishes capabilities covering:

- Rare-earth and other permanent magnets.
- Magnetic assemblies.
- Laminations.
- Stators.
- Shields and flux-related components.

Its published contact details include:

- Email: sales@pmlindia.com
- Phone: +91-22-68285400

**Potential collaboration:** Ask whether it can supply custom stator laminations, magnetic assemblies or development support for a low-speed PMSG. Confirm the exact manufacturing capability and minimum order quantity. [PML India](https://www.pmlindia.com/contact-us?utm_source=chatgpt.com)

My suggestion is to obtain the first complete generator from a specialist manufacturer. Develop your own stator and rotor manufacturing capability only after the turbine design stabilises.

# 3. Permanent Magnets and Magnetic Assemblies

### Recommended companies

**1. [Ashvini Magnets](https://ashvinigroup.com/?utm_source=chatgpt.com)**

- Manufactures bonded ferrite and rare-earth magnets.
- Publishes NdFeB and SmFeN magnet capabilities.
- Offers magnetic products for motor and sensor applications.

**2. [Permanent Magnets Limited](https://www.pmlindia.com/?utm_source=chatgpt.com)**

- Permanent magnets.
- Magnetic assemblies.
- Rare-earth magnet-related products.
- Industrial magnetic components.

**3. [Nexon Geochem](https://www.nexongeochem.com/?utm_source=chatgpt.com)**

- Developing an integrated rare-earth material and magnet ecosystem.
- Relevant as a potential future development and sourcing contact.
- Its published information describes manufacturing development, so confirm actual production availability before procurement. [ashvinigroup.com](https://ashvinigroup.com/?utm_source=chatgpt.com)

### What to request

For the 3 kW generator, request:

- NdFeB magnet grade.
- Maximum operating temperature.
- Magnetic flux density.
- Coating and corrosion resistance.
- Magnet dimensions and tolerances.
- Magnetic assembly drawings.
- Mechanical retention recommendations.

Do not select magnet grades independently of the generator designer's electromagnetic and thermal calculations.

# 4. Turbine Blades and Composite Fabrication

This category is critical because the hybrid Savonius–Darrieus design requires accurate aerodynamic profiles and reliable structural construction.

### Potential manufacturing partners

**1. [Indocool Composites](https://indocool.in/wind/?utm_source=chatgpt.com)**

- Location: Ranipet, Tamil Nadu.
- FRP composite manufacturing.
- Wind turbine composite components.
- Published capability to manufacture rotor blades.
- Experience with vacuum infusion, LRTM and hand lay-up processes.

**My recommendation:** Approach Indocool for custom helical Darrieus blade manufacturing and composite development. Confirm whether it will accept a small prototype order. [indocool.in](https://indocool.in/wind/?utm_source=chatgpt.com)

**2. [GBT Composites Technology](https://gbtcomposites.com/?utm_source=chatgpt.com)**

- Location: Vadodara, Gujarat.
- FRP composite manufacturing.
- Wind turbine rotor blades and nacelle components.
- Published manufacturing capability for large composite components.

**My recommendation:** Request a prototype quotation for the three external Darrieus blades. [gbtcomposites.com](https://gbtcomposites.com/composites-components.html?utm_source=chatgpt.com)

**3. [GE Vernova](https://www.gevernova.com/regions/asia/in?utm_source=chatgpt.com)**

GE Vernova has established wind blade manufacturing operations in India, including Karnataka and Gujarat.

This is a potential strategic industry contact rather than my first choice for small prototype outsourcing. Its large-turbine manufacturing operations may not accept small custom orders. [GE Vernova](https://www.gevernova.com/regions/asia/in?utm_source=chatgpt.com)

### Recommended manufacturing strategy

For the first prototype:

| Component            | Recommended sourcing                |
| -------------------- | ----------------------------------- |
| Darrieus blades      | Outsource FRP composite fabrication |
| Savonius buckets     | Local sheet-metal fabrication       |
| Rotor support plates | CNC/laser-cut steel fabrication     |
| Central shaft        | CNC machining                       |
| Generator frame      | Local industrial fabrication        |
| Assembly             | AeroSun Energy supervised assembly  |

For your first prototype, avoid expensive composite tooling until the aerodynamic blade profile is finalised.

# 5. Bearings and Mechanical Assemblies

These are safety-critical components because your turbine will operate continuously under changing loads.

### Recommended brands

| Company    | Products                              | Official source                                                                           |
| ---------- | ------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| SKF        | Industrial bearings and bearing units | [SKF India](https://www.skf.com/in?utm_source=chatgpt.com)                                |
| Schaeffler | FAG and INA bearings                  | [Schaeffler India](https://www.schaeffler.co.in/?utm_source=chatgpt.com)                  |
| NSK        | Industrial bearings                   | [NSK India](https://www.nsk.com/company/about-us/asia-pacific/in/?utm_source=chatgpt.com) | :chatgpt-content-reference{index="22"} |

### Regional sourcing opportunity

SKF's authorised distributor search lists **Anasuya Traders, Guntur, Andhra Pradesh**.

This could be useful for sourcing genuine SKF products within Andhra Pradesh. Verify the current authorised status and exact bearing availability before ordering. [SKF](https://www.emarketplace.in.skf.com/find-distributor?utm_source=chatgpt.com)

### Bearing specifications to finalise

- Radial load.
- Axial load.
- Shaft diameter.
- Operating RPM.
- Expected bearing life.
- Environmental conditions.
- Sealing and lubrication requirements.

Do not select bearings based only on shaft diameter.

# 6. Solar Panel Manufacturers

For AeroSun Energy's solar business, I recommend developing relationships with at least two module manufacturers and their authorised distributors.

### Recommended companies

| Company         | Main offering                         | Website                                                             |
| --------------- | ------------------------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| Waaree Energies | Solar PV modules and energy solutions | [Waaree](https://www.waaree.com/?utm_source=chatgpt.com)            |
| RenewSys        | PV modules, cells and components      | [RenewSys](https://www.renewsysworld.com/?utm_source=chatgpt.com)   |
| Adani Solar     | Integrated PV manufacturing           | [Adani Solar](https://www.adanisolar.com/?utm_source=chatgpt.com)   |
| Vikram Solar    | Solar PV modules and EPC solutions    | [Vikram Solar](https://www.vikramsolar.com/?utm_source=chatgpt.com) | :chatgpt-content-reference{index="29"} |

**My recommendation:** Start by approaching Waaree and RenewSys for distributor or channel-partner opportunities.

RenewSys also has a Hyderabad manufacturing division, which may be useful for regional sourcing and logistics. [renewsysworld](https://www.renewsysworld.com/about-us?utm_source=chatgpt.com)

### What to request

- Dealer or distributor pricing.
- Current product catalogue.
- TOPCon module availability.
- Product warranty.
- Performance warranty.
- Module datasheets.
- Applicable BIS compliance.
- ALMM status wherever required by the project or scheme.
- Minimum order quantity.
- Regional distribution terms.

# 7. Solar Inverters and Hybrid Inverters

### Recommended supplier

**[Sungrow India](https://www.sungrowpower.com/in/en/products?utm_source=chatgpt.com)**

Its published Indian product portfolio includes:

- Single-phase solar inverters.
- Three-phase solar inverters.
- Hybrid inverters.
- Residential energy storage systems.
- Commercial energy storage systems.

Published India contact:

- Phone: 8287233233
- Email: info-sgin@in.sungrowpower.com

**My recommendation:** Approach Sungrow for authorised distribution, product training and technical support. [SUNGROW](https://www.sungrowpower.com/in/en/products?utm_source=chatgpt.com)

### Important for AeroSun's hybrid wind system

Do not assume a normal solar hybrid inverter can accept the raw output of your wind generator.

Your wind turbine needs its own compatible rectification, power regulation, braking and protection architecture. The solar and wind sources must then be integrated through a technically compatible AC-coupled or DC-coupled arrangement.

The exact architecture should be engineered before purchasing the hybrid inverter.

# 8. Batteries and Energy Storage

### Recommended companies

**1. [Amara Raja Energy & Mobility](https://www.amararaja.com/amara-raja-energy-and-mobility-ltd/?utm_source=chatgpt.com)**

Its published business portfolio includes:

- Energy storage solutions.
- Lithium-ion cell manufacturing.
- Battery pack assembly.
- Industrial batteries.

It is worth approaching for battery and energy-storage development discussions. Confirm which lithium storage products are currently commercially available for your intended application. [https://www.amararaja.com/](https://www.amararaja.com/amara-raja-energy-and-mobility-ltd/?utm_source=chatgpt.com)

**2. [Exide Industries](https://www.exideindustries.com/?utm_source=chatgpt.com)**

Potential supplier for stationary energy-storage and backup-battery applications.

Request the appropriate battery product range, chemistry, cycle-life data and renewable-energy application documentation.

### Battery selection criteria

| Parameter     | Requirement                                |
| ------------- | ------------------------------------------ |
| Chemistry     | LiFePO4 or suitable alternative            |
| Capacity      | Based on customer load and backup duration |
| BMS           | Required for lithium battery systems       |
| Cycle life    | Verify at specified depth of discharge     |
| Safety        | Relevant battery safety certifications     |
| Warranty      | Written product and performance warranty   |
| Compatibility | Compatible inverter and charging profile   |

I would begin with a standard, manufacturer-supported battery and inverter combination rather than develop a proprietary battery pack.

# 9. Electrical Protection and Control Equipment

This category should not be treated as an inexpensive accessory. Correct protection is essential for both wind and solar installations.

### Recommended companies

**1. [Schneider Electric India](https://www.se.com/in/en/?utm_source=chatgpt.com)**

Products include:

- MCB and MCCB.
- DC circuit breakers.
- Surge protection devices.
- Contactors.
- Protection relays.
- Electrical enclosures.

Schneider publishes specific DC and photovoltaic protection products. [Schneider Electric](https://www.se.com/in/en/work/products/low-voltage-products-and-systems/?utm_source=chatgpt.com)

**2. [Siemens India](https://www.siemens.com/in/en.html?utm_source=chatgpt.com)**

Approach for:

- Industrial electrical protection.
- Circuit breakers.
- Control equipment.
- Monitoring and automation.

**3. [Larsen & Toubro](https://www.larsentoubro.com/?utm_source=chatgpt.com)**

Approach for:

- Electrical distribution equipment.
- Industrial control and protection.
- Panel-building and integration opportunities.

### Components to procure

| Component          | Application                             |
| ------------------ | --------------------------------------- |
| DC isolator        | Solar and DC-side isolation             |
| DC fuse            | DC overcurrent protection               |
| DC MCB             | DC circuit protection                   |
| AC MCB/MCCB        | AC distribution                         |
| SPD                | Surge protection                        |
| Earthing equipment | Electrical safety                       |
| Contactor          | Switching and control                   |
| Emergency stop     | Controlled shutdown                     |
| Dump load          | Wind turbine energy management          |
| Monitoring meter   | Voltage, current and energy measurement |

The wind system also needs an engineered overspeed protection and braking strategy. A conventional solar DC protection arrangement alone is insufficient.

# 10. Recommended Supplier Allocation for AeroSun Energy

Rather than contacting every company simultaneously, prioritise the following:

| Priority | Component                      | First supplier to approach | Alternative                       |
| -------- | ------------------------------ | -------------------------- | --------------------------------- |
| 1        | 3 kW PMSG                      | Mark Elektriks             | J.D. Engineering Works            |
| 2        | Stator and magnetic assemblies | PML                        | Specialist generator manufacturer |
| 3        | NdFeB magnets                  | Ashvini Magnets            | PML                               |
| 4        | Composite blades               | Indocool                   | GBT Composites                    |
| 5        | Bearings                       | SKF authorised distributor | Schaeffler                        |
| 6        | Solar panels                   | Waaree                     | RenewSys                          |
| 7        | Solar/hybrid inverter          | Sungrow                    | Other authorised inverter brands  |
| 8        | Batteries                      | Amara Raja                 | Exide                             |
| 9        | Electrical protection          | Schneider Electric         | Siemens / L&T                     |

This is my proposed sourcing shortlist, not a ranking of product quality or a confirmation that any supplier has agreed to work with AeroSun Energy.

---

# 11. How AeroSun Energy Should Work With These Suppliers

I recommend establishing three types of business relationships.

### Model A – Component purchasing

Purchase components directly from manufacturers or authorised distributors.

Suitable for:

- Bearings.
- Magnets.
- Electrical protection.
- Solar panels.
- Batteries.
- Inverters.

### Model B – Contract manufacturing

Provide your engineering drawings and specifications to a manufacturing partner.

Suitable for:

- Wind turbine blades.
- Rotor assemblies.
- Generator stators.
- Shafts.
- Generator housings.
- Structural frames.

AeroSun Energy retains product design ownership, subject to clearly agreed intellectual-property and tooling terms.

### Model C – Technology partnership

Collaborate with manufacturers to develop customised components.

Suitable for:

- 3 kW low-RPM PMSG.
- Custom generator windings.
- Magnetic rotor assemblies.
- Hybrid wind-energy control systems.

This is particularly important for your proposed wind-generator product.

---

# 12. Supplier Qualification Process

Before approving any supplier, maintain the following information.

| Information              | Required                |
| ------------------------ | ----------------------- |
| Company name             | Yes                     |
| GST registration         | Yes, where applicable   |
| Manufacturing location   | Yes                     |
| Contact person           | Yes                     |
| Product catalogue        | Yes                     |
| Technical datasheet      | Yes                     |
| Manufacturing capability | Yes                     |
| Minimum order quantity   | Yes                     |
| Prototype pricing        | Yes                     |
| Production pricing       | Yes                     |
| Warranty                 | Yes                     |
| Delivery period          | Yes                     |
| Quality certificates     | Applicable certificates |
| Sample availability      | Yes                     |
| Payment terms            | Yes                     |

For the wind turbine, additionally request:

- Generator test reports.
- Power versus RPM curves.
- Torque versus RPM curves.
- Efficiency data.
- Blade material specifications.
- Material traceability.
- Bearing load ratings.

**Do not pay large advance amounts to an unverified supplier.** Start with a prototype order, inspect the components and approve the supplier before placing volume orders.

---

# 13. Recommended 30-Day Supplier Development Plan

| Timeline   | Activity                                                | Expected outcome                |
| ---------- | ------------------------------------------------------- | ------------------------------- |
| Days 1–5   | Contact two PMSG manufacturers                          | Generator quotations            |
| Days 6–10  | Contact composite manufacturers                         | Blade manufacturing quotations  |
| Days 11–15 | Contact magnet and bearing suppliers                    | Component specifications        |
| Days 16–20 | Contact solar module and inverter manufacturers         | Distribution opportunities      |
| Days 21–25 | Contact battery and electrical protection manufacturers | Product and pricing information |
| Days 26–30 | Compare quotations and technical suitability            | Approved supplier shortlist     |

## 14. What I recommend AeroSun Energy does first

For your AS-WG-3000 prototype, I would prioritise these five suppliers:

1. Mark Elektriks – complete low-RPM generator.
2. J.D. Engineering Works – alternative generator quotation.
3. Indocool – composite rotor blade fabrication.
4. PML – magnets and stator-related components.
5. SKF – bearings and mechanical components.

For solar business development, approach Waaree and RenewSys in parallel.

---

## 15. Next step: Send supplier partnership enquiries

I recommend contacting suppliers in the name of AeroSun Energy Private Limited, identifying yourself as an Indian renewable-energy startup developing a customised 3 kW hybrid vertical-axis wind generator and integrated solar–wind solutions.

I can prepare a professional supplier outreach package containing:

- A customised enquiry email for each manufacturer.
- A 3 kW generator technical requirement sheet.
- A composite blade manufacturing enquiry.
- A request for authorised solar dealership/distributorship.
- A manufacturing partnership proposal.
- A supplier comparison and quotation evaluation sheet.

**My recommendation:** Start with the two generator manufacturers first. Their technical response will determine the rotor RPM, torque, generator dimensions, electrical design and much of the remaining prototype engineering.

## Phase 6: Launch your commercial operations

Start generating revenue while developing your wind technology.

Recommended initial services:

- Residential rooftop solar.
- Commercial rooftop solar.
- Agricultural solar pumps.
- Off-grid solar systems.
- Solar–wind hybrid solutions.
- Renewable-energy consultation and feasibility assessment.

Build relationships with qualified installation partners and equipment suppliers.

Your first commercial objective should be to secure **5–10 genuine customers or pilot projects**, collect feedback and document the results.

# AeroSun Energy – Commercial Launch Plan
## First 5–10 Customers and Pilot Projects

Now that Phase 1 and Phase 2 are complete, we should begin **Phase 3B: Commercial Launch and Customer Acquisition** alongside wind-generator development.

The immediate objective is to establish AeroSun Energy as a renewable-energy solutions provider, generate initial revenue and build a track record of genuine customer projects.

## 1. Initial services and target customers

I recommend launching with these six services.

| No. | Service | Target customers | Priority |
|---|---|---|---|
| 1 | Residential rooftop solar | Individual homeowners | Very High |
| 2 | Commercial rooftop solar | Shops, offices, warehouses and businesses | Very High |
| 3 | Agricultural solar pumps | Farmers and agricultural landowners | High |
| 4 | Off-grid solar systems | Rural homes, farms and remote facilities | High |
| 5 | Solar–wind hybrid solutions | Farms, remote sites and small businesses | Development / Pilot |
| 6 | Renewable-energy consultation | Homeowners, businesses and farmers | Very High |

### My commercial recommendation

Start selling residential and commercial rooftop solar immediately through qualified installation partners.

Develop agricultural and off-grid projects alongside these.

Initially offer solar–wind hybrid systems as feasibility studies and pilot projects until the wind generator has been tested and validated.

---

# 2. Develop your installation partner network

AeroSun Energy does not need to employ a large installation team immediately.

Build a network of qualified local contractors and technical partners.

### Partner categories

| Partner | Responsibility |
|---|---|
| Solar EPC contractor | Solar system design and installation |
| Electrical contractor | Wiring, protection and commissioning |
| Structural fabricator | Rooftop mounting structures |
| Solar equipment distributor | Modules, inverters and accessories |
| Battery supplier | Battery systems and warranty |
| Agricultural equipment dealer | Solar pump distribution |
| Wind turbine fabricator | Prototype manufacturing |
| Civil contractor | Foundations and structural work |

### Partner selection criteria

Before appointing a partner, verify:

- Technical experience.
- Electrical qualifications.
- Previous project photographs and references.
- GST and business details, where applicable.
- Safety practices.
- Insurance, where appropriate.
- Installation warranty and service arrangements.
- Ability to provide documentation.

For grid-connected installations, ensure applicable DISCOM approvals and scheme requirements are followed. For subsidised residential projects, verify the current approved vendor requirements before accepting orders.

---

# 3. Create your first six commercial packages

These packages will make it easier for customers to understand your offerings.

| Package | Suggested configuration | Target customer |
|---|---|---|
| Home Solar Basic | 1–2 kW | Small households |
| Home Solar Plus | 3–5 kW | Medium and large households |
| Business Solar | 5–20 kW | Shops and offices |
| Commercial Solar | 20–100 kW | Warehouses and industries |
| Agriculture Solar | Capacity based on pump requirement | Farmers |
| Hybrid Energy | Solar + wind + battery | Remote locations and farms |

These are proposed sales categories, not fixed product specifications. Final capacity should depend on electricity consumption, site conditions, applicable regulations and customer requirements.

---

# 4. Customer acquisition strategy

I recommend concentrating on five customer acquisition channels.

### A. Local direct marketing

Start in:
- Tirupati.
- Chittoor.
- Madanapalle.
- Puttur.
- Nearby agricultural areas.

Approach:
- Individual homeowners.
- Farmers.
- Commercial building owners.
- Small industries.
- Educational institutions.
- Hospitals and hotels.

### B. Google Ads

Create separate campaigns for:

1. Rooftop solar installation.
2. Commercial solar installation.
3. Solar pumps for agriculture.
4. Off-grid solar solutions.
5. Solar–wind hybrid systems.

Use local search targeting and measure genuine enquiries, calls and qualified leads rather than just clicks.

### C. Social media

Publish:
- Solar installation demonstrations.
- Solar savings explanations.
- Customer education.
- Renewable-energy awareness.
- Wind generator prototype development.
- Behind-the-scenes manufacturing updates.

Do not publish fabricated customer installations or performance figures.

### D. Referral programme

Build relationships with:
- Electricians.
- Builders.
- Architects.
- Real estate developers.
- Agricultural equipment dealers.
- Local business associations.

Offer transparent referral arrangements where legally and commercially appropriate.

### E. Direct business development

Contact:
- Schools.
- Colleges.
- Hospitals.
- Warehouses.
- Small factories.
- Hotels.
- Agricultural businesses.

Offer an initial energy-consumption assessment.

---

# 5. Your first 10 customers – Target plan

Instead of trying to sell all six services equally, use this initial customer mix.

| Customer | Proposed project | Objective |
|---|---|---|
| 1 | Residential rooftop solar | First reference project |
| 2 | Residential rooftop solar | Validate sales process |
| 3 | Residential rooftop solar | Collect customer feedback |
| 4 | Commercial rooftop solar | Business customer reference |
| 5 | Commercial rooftop solar | Validate commercial offering |
| 6 | Agricultural solar pump | Agricultural market validation |
| 7 | Agricultural solar pump | Validate installation process |
| 8 | Off-grid solar system | Remote application demonstration |
| 9 | Solar consultation / feasibility project | Build consulting capability |
| 10 | Solar–wind hybrid pilot | Demonstrate technology development |

These are acquisition targets, not confirmed customers or commitments.

### What to collect from every project

Maintain a project file containing:

1. Customer requirement.
2. Electricity consumption.
3. Site survey.
4. System design.
5. Quotation.
6. Supplier details.
7. Installation photographs.
8. Commissioning report.
9. Generation data.
10. Customer feedback.

This evidence will become valuable for future sales, partnerships and investor presentations.

---

# 6. Commercial pricing and revenue model

AeroSun Energy can earn revenue through several channels.

| Revenue source | Business model |
|---|---|
| Solar equipment | Product margin |
| Solar installation | EPC/service margin |
| Agricultural solar pumps | Equipment and installation margin |
| Off-grid systems | System integration margin |
| Hybrid energy | Design and integration margin |
| Consultation | Professional service fee |
| Maintenance | Annual maintenance contracts |
| Wind generators | Future manufacturing and product sales |

For the initial stage, avoid purchasing large quantities of inventory. Obtain supplier quotations against actual customer requirements.

Use milestone-based payments:

- Advance payment when the order is confirmed.
- Payment before major procurement or dispatch.
- Installation milestone payment.
- Final payment after agreed commissioning and handover.

Have a written agreement covering scope, exclusions, warranties, approvals and payment terms.

---

# 7. 60-day commercial launch schedule

| Period | Activities | Expected deliverables |
|---|---|---|
| Days 1–10 | Identify EPC partners and equipment suppliers | Partner database |
| Days 11–20 | Finalise service packages and quotations | Sales documents |
| Days 21–30 | Launch website enquiries and marketing | Qualified leads |
| Days 31–40 | Conduct customer meetings and site surveys | Customer proposals |
| Days 41–50 | Secure initial orders | Confirmed projects |
| Days 51–60 | Execute initial installations and document results | Reference projects |

The target is to build a pipeline capable of securing 5–10 customers or pilot projects. Actual conversions will depend on pricing, lead quality, financing and execution capacity.

---

# 8. Documents AeroSun Energy needs immediately

I recommend preparing these 10 business documents:

| No. | Document |
|---|---|
| 1 | Company profile |
| 2 | Solar product catalogue |
| 3 | Wind and hybrid product brochure |
| 4 | Customer requirement form |
| 5 | Site survey form |
| 6 | Solar quotation template |
| 7 | Commercial proposal template |
| 8 | Installation partner agreement |
| 9 | Customer service and warranty document |
| 10 | Project completion and commissioning report |

---

# 9. Commercial performance dashboard

Track the following KPIs every week:

| KPI | Initial 60-day target |
|---|---:|
| Qualified customer enquiries | 50 |
| Customer meetings | 20 |
| Site surveys | 15 |
| Quotations submitted | 12 |
| Confirmed customers/projects | 5–10 |
| Installation partners | 3–5 |
| Equipment suppliers | 5–8 |
| Customer testimonials | 3 |

These are proposed business-development targets, not guaranteed results.

---

## 10. What I recommend we do next

Let's build AeroSun Energy's actual sales infrastructure, starting with the documents your team will use every day.

My recommended order is:

1. **Professional AeroSun Energy company profile** – introduce the company to customers and suppliers.
2. Solar product catalogue – explain your six services.
3. Customer requirement and site survey forms.
4. Professional quotation template.
5. Installation partner agreement.
6. Customer acquisition and lead-tracking system.

**My recommendation: Start with the company profile and solar product catalogue.** These two documents will give you the foundation to approach customers, EPC contractors, manufacturers and potential business partners professionally.

## Phase 7: Build your business and marketing infrastructure

Prepare the following:

| Area              | What to establish                                           |
| ----------------- | ----------------------------------------------------------- |
| Website           | Professional company website with product and service pages |
| Company profile   | PDF company profile                                         |
| Product catalogue | Solar, wind and hybrid solutions                            |
| Sales             | Quotation templates and customer proposal formats           |
| Marketing         | Google Ads, social media and local campaigns                |
| CRM               | Customer enquiries, follow-ups and sales tracking           |
| Documentation     | Agreements, invoices, warranties and service records        |
| Demonstration     | Working solar or hybrid demonstration project               |

Use your existing AeroSun Energy branding consistently across all materials.

## Phase 8: Explore funding and government support

Once your product concept and business model are documented, explore:

- DPIIT startup recognition.
- Startup India Seed Fund Scheme, subject to current availability and eligibility.
- Startup incubators and accelerator programmes.
- Andhra Pradesh startup and renewable-energy programmes.
- Bank finance and eligible MSME credit facilities.
- Strategic partnerships with renewable-energy manufacturers.

Do not assume that receiving DPIIT recognition automatically provides funding or a government grant.

## My recommended 90-day action plan

| Timeline   | Priority activity                                              | Expected outcome                     |
| ---------- | -------------------------------------------------------------- | ------------------------------------ |
| Days 1–15  | Statutory compliance and DPIIT application preparation         | Compliance checklist and application |
| Days 16–30 | Company profile, product catalogue and supplier identification | Business-ready documentation         |
| Days 31–45 | Wind generator engineering and prototype procurement           | Prototype development                |
| Days 46–60 | Prototype assembly and testing                                 | Initial technical results            |
| Days 61–75 | Solar demonstration and customer acquisition                   | Initial customer feedback            |
| Days 76–90 | Pilot projects, partnerships and funding applications          | Commercial validation                |

_This is a proposed schedule, not a guarantee of completion or government approval._

---

# My recommendation: Focus on these five immediate actions

1. Complete and verify all post-incorporation statutory compliance.
2. Apply for DPIIT Startup India recognition.
3. Prepare the AeroSun Energy company profile and investor presentation.
4. Start developing your 3 kW wind generator prototype.
5. Secure your first solar customers and supplier partnerships.

### Let's establish your exact current position

I need just one clarification before preparing your next execution plan:

**Which of these have you already completed?**

- Company incorporation certificate
- Company PAN and TAN
- Current account
- GST registration
- Udyam/MSME registration
- Startup India DPIIT recognition
- Trademark registration
- Website and official company email

You can reply **"All completed except DPIIT"**, or tell me which certificates are still pending.

Then I can prepare AeroSun Energy's next steps without asking you to repeat work that is already finished.
