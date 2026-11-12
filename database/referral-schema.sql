CREATE TABLE IF NOT EXISTS solar_referrals (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  reference_code CHAR(20) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  referrer_name VARCHAR(100) NOT NULL,
  referrer_phone CHAR(10) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  referred_name VARCHAR(100) NOT NULL,
  referred_phone CHAR(10) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  postal_code CHAR(6) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  property_type ENUM('house', 'apartment', 'commercial', 'other') NOT NULL,
  status VARCHAR(24) NOT NULL DEFAULT 'new',
  referrer_permission_confirmed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_solar_referrals_reference_code (reference_code),
  KEY ix_solar_referrals_status_created_at (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
