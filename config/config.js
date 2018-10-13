require("dotenv").config();

let CONFIG = {};
CONFIG.app = process.env.APP;
CONFIG.port = process.env.PORT;

CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION;
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION;

module.exports = CONFIG;