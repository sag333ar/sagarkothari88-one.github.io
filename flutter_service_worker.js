'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3954405b4645e7491eed12b55638358a",
"version.json": "b827a6c16524baebbfd107f818922482",
"index.html": "9ef2a388d5c373b3b410afe93be9ef3f",
"/": "9ef2a388d5c373b3b410afe93be9ef3f",
"CNAME": "8232087808a2b93cf1fba48a657bcf61",
"main.dart.js": "ca0703ff8d0ed55dafdbae2c69313720",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f41296f3720d1c9d3146f1b53d40964",
".git/ORIG_HEAD": "50c754b107bb6725076aafadd740f930",
".git/config": "8c0ba6db3a494bcec824809ec11d2b30",
".git/objects/92/7886bc3b513c19f07fc18677665e376d289797": "1749fb2cec3c334e5227a8dac63af953",
".git/objects/68/5c5c29351b4fd1e0cd3bd97dec8c7d37c7b20e": "1751e36f2144f4dda14d1f15b6fd8072",
".git/objects/57/59473e022c32f87764f291ca36d16f7b4a9da5": "ff7d0a9b18ff3a20f3d4e620aaade625",
".git/objects/3b/50d69052a9d2917b6b880e94689928b79bc80a": "6d980fab9ee6a8ea04955faed74450af",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/bde9cd6667dcb370df7fc3fc5b52e2857850cd": "6a8ab6bfc3d6094f73b34b5eec205b9e",
".git/objects/32/63c5fe797b97baae67502de3c6d429b1f1d27a": "6f7a6c26cc748e918f4585eee0955661",
".git/objects/32/d1577eb222ebc2afce369e3cbb2a09f8383958": "8874a4629a0b1f2b8b7cf6209d70d849",
".git/objects/69/c6178771351823d67a26c7ddb2d30f5c1466cc": "67df1aa66406d1d75e5c9060244cba1b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/c42e8d3f93b82fe6b0cd7b1838672e74d0e211": "7df5aab0c87fcd56e1a39afc8a97803d",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/b6caf7a0503223a5b6996cd716f4e4e36f7820": "adbd79c9f614fd6ef5b69650a348ee60",
".git/objects/0b/530c385735ee12788949f9ddf5be4cdc7e3d53": "f44617013a7ccef48ae623ffdf2444d4",
".git/objects/93/bccc617b85e5dae431f14567564dcd1cfe28a2": "5843a3d5af7431cbf277597f74434d7e",
".git/objects/0e/acbcf985cc8e521155979405219fd0baee5dfb": "8acec95408c2076246558b6fa7669db3",
".git/objects/34/0c9118269ddab6459cf1fed5cffbd5c13e8784": "6cbca9fb3f59bb23d4d8517ec96b7e97",
".git/objects/a3/ce6196033b5c3f0781cf0ad8e3f23ea780c678": "41d5bf438b9a55a380f170790c561b79",
".git/objects/bb/5e41ef2da62ac07bc966a813de957c455a225d": "aabe1a605555a8107337fbb4e6e2edf8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/3134f2df48e79b30a4659dba5ac05ebd813807": "6f18717e5c7555a53cf233fbe51fdc20",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/f69d179d4e8ef9302c0744609421c9b3463b9f": "9c12e42df09dd56f82a684d1f1e97069",
".git/objects/a5/f2fc6fb3c57aa3e7d550cd92c1fdb1e429de7e": "e6f2d522b7cc1161950a0f45bc82cab4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/29966b059e1695303c793bb181ce834080961c": "b75cbc10fc480838e0960b61bc49a2af",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/09f436a69376f8ee699772f4a8d744b64eadf1": "5afb3cae00db4af0ac666967d39dbf5a",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e0e54900e7c7d34a031584de98ef8931e1568f": "6a9a8dbd4047961f926c69bf81856a7b",
".git/objects/c0/498be0416aae56c61b2c37b31b3f5d1e8ebbad": "80f42edc7770c690a872b17c828d9e97",
".git/objects/ee/d78b9e42a851fc91cf74eb4ce235e3733068a9": "39de010ff58eab9fc1d0d603a79cffc2",
".git/objects/ee/c6d145ccd9d9e89dc7b909e0c2e9802f3d125d": "4b0ebbb4d3a7812e3c82a3112b4f5dc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/bad14e66bca7620d2eb326ac95ec136098b025": "e933b09b2e7041664829dbce1224eff7",
".git/objects/c8/1cd9b8929cddbb2608a1aec4dfedea9c39cbd4": "a14f91dd6e4c33e0f4ccd92545c7aba1",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/d7b7608ecd94b094a4cfb502835740a5bff3e3": "5e3163609bf9fc47b72038e7ac005a93",
".git/objects/7c/ef2ac44b480b74ac21ea35de0b49f55cb31ea0": "80bbbeeb7a30860e53264573714986a8",
".git/objects/42/d78e2bc2dcc15bd29bc03889919698155d9f46": "b1bd8d9a1ee9181c781eb5281715ab89",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/b521fa31b9cee91a1d4a02d17e5bd8d76389f8": "ee43927c8424e855c9cfb22bfe6e5cac",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/d1ae61a6e63dcd3e2529692c1e9609d5ea3ee9": "19c10356418a6b577d1d9bc20b93ba79",
".git/objects/21/6436ffd1eb0ab989c6f50c7490232707d42089": "fdc5780c29dfccb846d142d788082165",
".git/objects/81/df50b6b95a3aa556b4fd4573499ca0201ae703": "39910e4182a8e54e7ef0a45110154238",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/72/4200b52ed21d4a1a4c509f2c3532a6237cefdb": "49dd5b4785f5e6dce176fe06f0d3ab2d",
".git/objects/44/cfd52463c2348564dbf7e014767b680e6c1f52": "e521034a6aa425b07134ce3ef2a3ce5d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8eca9bed836772b878598b05b2de0c885a641b": "a3ce587bf5fd819f7923f6596666cb03",
".git/objects/6b/4457ea695c328b7b84df36aaf206b5790d05e2": "07e12a1f3beaafb91ea15c528975c56c",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/9a/df73eff5e13d4865843a195f380592a14bc392": "2f9926204c7ad8e7a1d5134d3ccf648b",
".git/objects/09/2f8ff9d243dcd3fdef8e9fae75218318e5e4af": "c06e942375fc03fa0ccfac2b5d37997c",
".git/objects/91/0be39225c62a671aa4fef9790650eaf1303f14": "dc18acffa012b0165a20105ad3df9cdd",
".git/objects/65/8963c98d143cc03231a6f97c349f77ad295d2d": "99ffa2c53febdb8cb96b2310008796e6",
".git/objects/54/1219b5f29a962868afc3e85b1881f7119a8e76": "bc66fe5d878060ee55a43b64ccb5b714",
".git/objects/54/e9bb9eca37fe7c75a8a62ae9d407df1c0f372e": "83c1097e33ade510b64a6514d4c7caea",
".git/objects/98/b5d73a72873eba5a638cc10b8fd73ccf12e2cd": "fe65d9c0ba21332786efcc1403381e12",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/8fc735140ece584de632219c3cfd3a7a6b565f": "921994632bda0817fad6a7925f7d9c7c",
".git/objects/37/f9f07f93b25ca3b81a7406d1b9e16a5f7abee5": "534da1418729a24e786aaa87b7ac6b61",
".git/objects/08/288ee5058b3cb36b3172b34be454f87974bd6d": "04d918b4bc0b1fed547aaaf3d70c3e90",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/d58c99d2f02570e814ce206b45523c7b4169b1": "261d7dd6ac977746dba985da33ae7bd2",
".git/objects/bf/6a6228b4803ee0053ef6aa73f8ac2769c2a8bb": "e55ea5238fbdfbaf457b82878afb19b6",
".git/objects/d3/8543a83bd292a5b44156bdbe2fa4c8a8fa697f": "df6233e9a9baf8c3503903d4210b7e0b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/0984355e855abd08c9ee701065631a5010ffc8": "d4323d8804ca96b0a6b409e1d22286d2",
".git/objects/b6/20d75a19abc74524c6546cc1ff99337df9b89a": "4ba4133739db74f6d21e4455b90f017a",
".git/objects/a9/b9462759ce142e9838653d17fedf984bc2d1af": "b67a86902c4fc7893615d41480aae81f",
".git/objects/a9/43d0a5585b287f0260e5633b90367405137450": "d37c849b84e796b6dc799b1ebba66ca0",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ee4cba9b971800944b84b079d11ad33a446290": "b3f18e84c171372396515992e2a87cbb",
".git/objects/de/d7b9786999b613e34dabf6130127afe1d3bc37": "2105cf0e1891b31b69fc4e7bafbce1c3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/55365a8b40406b1bf1804dfd53959cb2ea48e5": "56c5186daf697e7b2167d43aaae2ab11",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/286bbbc2c33e9a8a5e6d8cbd5c7f329972733f": "14364ec63249d2ec9f65bf3798e49b0d",
".git/objects/cb/35ea01c53bb3ec918d992a9f7990f0f179455e": "be9fd4ae7751630bc48c05250cd97bd1",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/078c7f031d0f09be3e868797318f84a2b4df88": "8287d64cf6413aeb42b666ee868adb71",
".git/objects/4a/e517b3daecc9d5e64a8cb56f9831f7366c942a": "0c1d19197dd605579c94fe4ebf692513",
".git/objects/4a/11fca9a76169fd671c9b9821d9bd6fef289834": "9f2f11c090763c5319f7a30d08bc9b5a",
".git/objects/24/64ea94efe71e0f804601ab2b6ee0be8a59fa4e": "c90037827d01b6c11ad0449742e6f6f9",
".git/objects/23/62c090286c7cb9d60450f9beb20816ffa81064": "af7d0cc666bf1ce76f811c4a8b0445ac",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/49/c640d76b355ebc7f7bbeb20ed163242b2521d8": "e925c1355d88f9f70aceae44af332f44",
".git/objects/49/f24db532b706eb0f2ed9278f6c7a27233c9c41": "b458ad84e9194675f653ad8f06323f95",
".git/objects/40/d1f3e2d9fc17bb224b31f2af991f1b33373245": "2b520c16a2848deb5bdaafa19de5c01e",
".git/objects/47/472c976992f96e702a575b53c8bbbb17b39e38": "92ec05417b2a2535c5506e0a5687cffc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8a0eb2063bdf63bb0e8612c8ab26274",
".git/logs/refs/heads/main": "f8a0eb2063bdf63bb0e8612c8ab26274",
".git/logs/refs/remotes/origin/main": "611e3f4082386ec8f0a8f8b2d83f72fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2c5d0d2af0d30e680ad1b02fe447c686",
".git/refs/remotes/origin/main": "a9359f40baeab5560836a5a5daac85fe",
".git/index": "6a29b7595ec919b787ff57fb1971b2aa",
".git/COMMIT_EDITMSG": "9803c0de83d6f351a614d6bef81c5324",
".git/FETCH_HEAD": "bf2fc32688d768c8a095ba73274f61f5",
"assets/AssetManifest.json": "041da8941a4d00b2028ac86943cf0ad0",
"assets/NOTICES": "0b908728fb0e569abd3b4346146e3fb7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "a3823177b12042fc7d1a14ea8825a3d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f96220fada3331afa2a1c8011b751d51",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/black_frame.png": "a86d27f88b0ebfe3558a7099ce1131f7",
"assets/assets/download.png": "cfac7ec3fe3541a100d1ed0f91b3b1f1",
"assets/assets/images/three_speak_logo.png": "60b8c76507e1b6080fdcb995d9dedd39",
"assets/assets/images/developers.png": "010c9b4f02bfde9b0f91728a21eb903c",
"assets/assets/images/stats_logo.png": "a1f3d448bb440b08eae0cc4f30b2b4c2",
"assets/assets/images/vote_logo.png": "bde019aaa0fdfd5735c9cd0cf5788aef",
"assets/assets/images/distriator_logo.png": "b838cf5051ce1aac48a87e1a11dc02e9",
"assets/assets/images/gifts.png": "c804c44a9a0d1468a8cffc538a02fcf0",
"assets/assets/images/hifind_logo.png": "8195532e1781f1ac5140190fe5d4a2dc",
"assets/assets/images/hive_keychain_logo.png": "3071fd0e938c2f73dd933718d26a743e",
"assets/assets/images/three_shorts_logo.png": "3d29255e258eead26561581f03c9cf48",
"assets/assets/images/logo.png": "65521371a0b1f11e42920a69b2ba074d",
"assets/assets/images/hive_logo.png": "eb70b4860ddab728a7bcf87b41bc2ce7",
"assets/assets/images/template.png": "a96a40fb15ca9fad8d40a007ba890b1e",
"assets/assets/images/hiveauth_logo.png": "7bc215ae2c73a4876f08b02398612b44",
"assets/assets/images/ecency_logo.png": "6cd891e75bdd6541f3f74edb39f33a5b",
"assets/assets/images/podcast_logo.jpg": "93cef20376e3a3338f938716b92e2aa8",
"assets/assets/images/inleo_logo.png": "b939ce99c3c4304c570aab6f22a1cc21",
"assets/assets/images/donate_logo.png": "4cd9d425f163c2ab77ef5dde124086a0",
"assets/assets/images/contribution.png": "80295c484b1dd2b1c1c377820e5aae21",
"assets/assets/images/actifit_logo.png": "e46d3e114855524fe49ce149c162877f",
"assets/assets/images/nodes.png": "bbfd91bf91bc4853b349799f2d7782c3",
"assets/assets/app-logo-big-square.png": "27542fd6eca49cc4c0ebd0d491f64960",
"assets/assets/appstore.png": "1dd70e6f454d640f1e22bad5e22354c3",
"assets/assets/background.png": "0345d580f532248bdce891b70e3bae73",
"assets/assets/ss/auth_ss.png": "61cff80db5d782d0b688aa23b072d997",
"assets/assets/ss/bookmarks_ss.png": "a75a001373e28d21c42e790d382b48e1",
"assets/assets/ss/feed_ss.png": "5ff0173769878d39ab6c4630b4e978b5",
"assets/assets/ss/drawer_ss.png": "33013a3fe3b5c7e531e968a88718bd03",
"assets/assets/ss/detail_ss.png": "1a453e30d8c094de2d66df7f8fb8a7ac",
"assets/assets/ss/settings_ss.png": "b3298c84ee456a873f4985a4a416df80",
"assets/assets/ss/templates_ss.png": "baff69285a8fd616a043fd06d0d6a573",
"assets/assets/ss/multi_account_ss.png": "b192314f95eb43e5d20a864fbc6b3c12",
"assets/assets/blue_frame.png": "b04c3708c754138da452d9cfd090c8a2",
"assets/assets/red_frame.png": "bcbf4ba8eddb04d686d8fab4876148f8",
"assets/assets/playstore.png": "330ad8782b8faccf6e73e34e1c17448b",
"assets/assets/badge-example-alternate.png": "71b4bb0e6377ef81c9f52dd78432dd44",
"assets/assets/app-logo-black-and-white.png": "9f079b0cdff29ed336949a411ab70a48",
"assets/assets/appstore-dark.png": "1eb0ece22da1a8099cc119dba4ac91d9",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
