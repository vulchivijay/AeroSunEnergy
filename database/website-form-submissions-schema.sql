CREATE TABLE IF NOT EXISTS website_form_submissions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  reference_code CHAR(20) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  form_type VARCHAR(32) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  payload JSON NOT NULL,
  status VARCHAR(24) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_website_form_submissions_reference_code (reference_code),
  KEY ix_website_form_submissions_type_status_created (form_type, status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
