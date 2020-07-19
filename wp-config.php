<?php
# Database Configuration
define( 'DB_NAME', 'wp_fireflyse' );
define( 'DB_USER', 'fireflyse' );
define( 'DB_PASSWORD', '7j4fE7I8Z7dDQCYrb5m8' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_HOST_SLAVE', '127.0.0.1' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wpkx_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         '0-iXw(PR<bWwn5;D6]*J<mUs_@icny|nbALzNpb2,MLbJ[!@b`hFZW!rg-Iap6qN');
define('SECURE_AUTH_KEY',  'VJu|dH}JXr_@4y:U(@mswz|-0t?(~{B5vE2Fc2dw*]Hk7[Up64||>3ICb4]|bTDC');
define('LOGGED_IN_KEY',    'O-SgowTO<L,+&hJG//)|qNX{{WWQX(lcwz1uQ6f]=Wb+`.hxbvs8V--Sy)PNX+mH');
define('NONCE_KEY',        '<eUiF~7P$y1S_3-B*~cydZ4|qNF@m~HcZo$!$RLw/(PLPge+pCX_+3W=O%@vjVm)');
define('AUTH_SALT',        '_f-~>KE1y[gqVBCJnP)i`V,SzgT}IuG6]L?n[!5+RaKKWtm|pEpP6jj<jlQa||Uu');
define('SECURE_AUTH_SALT', '-e#}m;%gw$JY!bWKD&ET}bWi_x<N%|xC-~%Y-CD/]O^Y?lQTn;#LS&iq(%,Kqa]|');
define('LOGGED_IN_SALT',   'Q+C6Sd>a-(;cc]Gjb9j}}MPQ.S&-EhdH8+-;P2rUI,9cC/cA^y:wn-j;v #wZeNq');
define('NONCE_SALT',       'o`Ol[>*k*j b#TyY%6H0|W^_lpfB/A)Umh~F}}4DhGyKM7;]9+&aD+Ot4D{j-eGE');


# Localized Language Stuff

define( 'WP_CACHE', TRUE );

define( 'WP_AUTO_UPDATE_CORE', false );

define( 'PWP_NAME', 'fireflyse' );

define( 'FS_METHOD', 'direct' );

define( 'FS_CHMOD_DIR', 0775 );

define( 'FS_CHMOD_FILE', 0664 );

define( 'WPE_APIKEY', '79606ed79ef88c98b4a58a421258638244cab070' );

define( 'WPE_CLUSTER_ID', '100739' );

define( 'WPE_CLUSTER_TYPE', 'pod' );

define( 'WPE_ISP', true );

define( 'WPE_BPOD', false );

define( 'WPE_RO_FILESYSTEM', false );

define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );

define( 'WPE_SFTP_PORT', 2222 );

define( 'WPE_LBMASTER_IP', '' );

define( 'WPE_CDN_DISABLE_ALLOWED', true );

define( 'DISALLOW_FILE_MODS', FALSE );

define( 'DISALLOW_FILE_EDIT', FALSE );

define( 'DISABLE_WP_CRON', false );

define( 'WPE_FORCE_SSL_LOGIN', false );

define( 'FORCE_SSL_LOGIN', false );

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define( 'WPE_EXTERNAL_URL', false );

define( 'WP_POST_REVISIONS', FALSE );

define( 'WPE_WHITELABEL', 'wpengine' );

define( 'WP_TURN_OFF_ADMIN_BAR', false );

define( 'WPE_BETA_TESTER', false );

umask(0002);

$wpe_cdn_uris=array ( );

$wpe_no_cdn_uris=array ( );

$wpe_content_regexs=array ( );

$wpe_all_domains=array ( 0 => 'fireflyse.wpengine.com', );

$wpe_varnish_servers=array ( 0 => 'pod-100739', );

$wpe_special_ips=array ( 0 => '104.199.125.216', );

$wpe_netdna_domains=array ( );

$wpe_netdna_domains_secure=array ( );

$wpe_netdna_push_domains=array ( );

$wpe_domain_mappings=array ( );

$memcached_servers=array ( );
define('WPLANG','');

# WP Engine ID


# WP Engine Settings






# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', __DIR__ . '/');
require_once(ABSPATH . 'wp-settings.php');
