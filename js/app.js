////////////////////////////////////
// MARKET DATA (PRICES / TOP EXCHANGES) API & CALLBACK
////////////////////////////////////
const crypto = {
  prices: (symbol, callback) => {
    const settings = {
      url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD`,
      dataType: 'json',
      type: 'GET',
      success: callback
    };
    $.ajax(settings);
  },
  topExchanges: (symbol, callback) => {
    const settings = {
      url: `https://min-api.cryptocompare.com/data/top/exchanges?fsym=${symbol}&tsym=USD`,
      dataType: 'json',
      type: 'GET',
      success: callback
    };
    $.ajax(settings);
  }
};

// CRYPTO.PRICES CALLBACK
const display = {
  prices: data => {
    const symbol = Object.keys(data.DISPLAY)[0];
    const coin = data.DISPLAY[symbol].USD;

    $('#js-ticker').html(`${symbol}`);
    $('#js-ticker-price').html(`${coin.PRICE}`);
    $('#js-market-cap').html(`${coin.MKTCAP}`);
    $('#js-day-volume').html(`${coin.VOLUME24HOURTO}`);
    $('#js-circulating-supply').html(`${coin.SUPPLY}`);
    $('#js-day-high').html(`${coin.HIGH24HOUR}`)
    $('#js-day-low').html(`${coin.LOW24HOUR}`);
    $('#js-day-change').html(`${coin.CHANGE24HOUR}`);
    $('#js-day-change-percent').html(`${coin.CHANGEPCT24HOUR}%`);
  },
  topExchanges: data => {
    console.log(data)
    $('#js-exchange-one').html(`${data.Data[0].exchange}`);
    $('#js-exchange-one-volume').html(`$ ${data.Data[0].volume24hTo}`.substring(0, 13));

    $('#js-exchange-two').html(`${data.Data[1].exchange}`);
    $('#js-exchange-two-volume').html(`$ ${data.Data[1].volume24hTo}`.substring(0, 13));

    $('#js-exchange-three').html(`${data.Data[2].exchange}`);
    $('#js-exchange-three-volume').html(`$ ${data.Data[2].volume24hTo}`.substring(0, 13));

    $('#js-exchange-four').html(`${data.Data[3].exchange}`);
    $('#js-exchange-four-volume').html(`$ ${data.Data[3].volume24hTo}`.substring(0, 13));

    $('#js-exchange-five').html(`${data.Data[4].exchange}`);
    $('#js-exchange-five-volume').html(`$ ${data.Data[4].volume24hTo}`.substring(0, 13));
  }
};


// ////////////////////////////////////
// // NEWS API & CALLBACK
// ////////////////////////////////////
// const news = {
//   data: callback => {
//     const settings = {

//     };
//     $.ajax(settings)
//   }
// };

////////////////////////////////////
// VIDEOS API & CALLBACK
////////////////////////////////////
// const videos = {
//   data: (query, callback) => {
//     const settings = {

//     };
//     $.ajax(settings)
//   }
// };


////////////////////////////////////
// FULL CRYPTO CURRENCY COIN LIST
////////////////////////////////////
const tickers = {
  symbol: ['BTC', 'ETH', 'XRP', 'BCH', 'EOS', 'LTC', 'ADA', 'XLM', 'IOTA', 'TRX', 'NEO', 'XMR', 'DASH', 'XEM', 'VEN', 'BCN', 'ETC', 'USDT', 'QTUM', 'ICX', 'OMG', 'BNB', 'LSK', 'BTG', 'XVG', 'ZIL', 'ZEC', 'NANO', 'AE', 'ONT', 'STEEM', 'ZRX', 'SC', 'WAN', 'BTS', 'BTM', 'BCD', 'STRAT', 'PPT', 'WAVES', 'RHOC', 'MKR', 'DCR', 'GNT', 'DOGE', 'IOST', 'BTCP', 'SNT', 'HSR', 'REP', 'DGD', 'LRC', 'XIN', 'DGB', 'WTC', 'AION', 'BAT', 'ELF', 'ARDR', 'KMD', 'MITH', 'NPXS', 'LOOM', 'WICC', 'ARK', 'NAS', 'GAS', 'KCS', 'PIVX', 'KNC', 'ELA', 'ETHOS', 'RDD', 'MONA', 'SUB', 'FUN', 'CTXC', 'CNX', 'QASH', 'SYS', 'DCN', 'BNT', 'CENNZ', 'DRGN', 'GXS', 'FSN', 'STORM', 'HOT', 'NXT', 'WAX', 'NEXO', 'MAN', 'VERI', 'SALT', 'ENG', 'XZC', 'SOC', 'CMT', 'BFT', 'ETN', 'LINK', 'GTO', 'FCT', 'SKY', 'NEBL', 'POWR', 'POLY', 'NCASH', 'ACT', 'MCO', 'R', 'REQ', 'GBYTE', 'MANA', 'MAID', 'BTCD', 'DBC', 'NULS', 'PAY', 'POA', 'CND', 'EMC', 'STORJ', 'ICN', 'CVC', 'BTO', 'HT', 'ZEN', 'PART', 'NXS', 'TNB', 'QSP', 'PAYX', 'KIN', 'ABT', 'RLC', 'THETA', 'XDN', 'IGNIS', 'SRN', 'POE', 'DENT', 'ANT', 'CPX', 'GNX', 'DDD', 'RUFF', 'ENJ', 'GNO', 'BOS', 'BLZ', 'SMT', 'MTL', 'AGI', 'GAME', 'VTC', 'SAN', 'TPAY', 'AMB', 'SMART', 'GTC', 'HPB', 'RDN', 'TOMO', 'DTR', 'DROP', 'BCO', 'SNM', 'RPX', 'DTA', 'SPHTX', 'CS', 'LCC', 'DEW', 'XAS', 'DPY', 'ZCO', 'BTX', 'UBQ', 'IHT', 'ITC', 'LEND', 'MED', 'GRS', 'BLOCK', 'TKY', 'INK', 'GVT', 'AUTO', 'BIX', 'OST', 'PPP', 'NAV', 'PPC', 'PLR', 'C20', 'ZCL', 'VEE', 'CLOAK', 'BRD', 'RCN', 'AST', 'ADX', 'DATA', 'BAY', 'EMC2', 'EDO', 'SNGLS', 'TRUE', 'TRAC', 'TEL', 'QRL', 'ECA', 'OCN', 'APPC', 'SPANK', 'WPR', 'DNT', 'UTK', 'BURST', 'SLS', 'RKT', 'ION', 'WABI', 'MDS', 'CRPT', 'YEE', 'XPM', 'INT', 'VIBE', 'TNT', 'DCT', 'EDG', 'VIA', 'INS', 'PRL', 'NANJ', 'ELEC', 'MOD', 'WINGS', 'LYM', 'DATX', 'RVN', 'REN', 'LBC', 'BOT', 'PURA', 'TAU', 'JNT', 'MNX', 'TNC', 'XCP', 'QLC', 'RNTB', 'TKN', 'DAT', 'DOCK', 'BLT', 'SOAR', 'BAX', 'WGR', 'QUN', 'YOYOW', 'TRIG', 'NGC', 'EKT', 'FUEL', 'CDT', 'TAAS', 'NLG', 'BITCNY', 'FTC', 'SBD', 'MLN', 'MGO', 'PRE', 'TCT', 'CPC', 'BCPT', 'MTN', 'RFR', 'EVN', 'LET', 'ETP', 'KICK', 'SAFEX', 'XP', 'SENT', 'TEN', 'COB', 'UTNP', 'LUN', 'XES', 'SENC', 'MOBI', 'BITG', 'NTK', 'STK', 'VIB', 'SWH', 'HAV', 'ONION', 'NMC', 'DAI', 'CSC', 'CVT', 'SXDT', 'XEL', 'ADT', 'SWFTC', 'UKG', 'ECC', '1ST', 'BKX', 'SHIFT', 'ZOI', 'UGC', 'BANCA', 'SNC', 'AEON', 'STX', 'ZSC', 'BBR', 'HTML', 'TIO', 'AIDOC', 'MER', 'CFI', 'XBY', 'POT', 'QBT', 'LGO', 'PPY', 'MEDIC', 'PRO', 'ZPT', 'COLX', 'MTH', 'HMQ', 'AMP', 'COSS', 'UP', 'GUP', 'MSP', 'XDCE', 'XSH', 'HST', 'UNO', 'THC', 'EVX', 'BITB', 'IOC', 'STQ', 'EKO', 'TSL', 'SS', 'PHR', 'DLT', 'DIME', 'LEO', 'MDT', 'ACAT', 'DMT', 'ODE', 'PEPECASH', 'TIX', 'SPC', 'XSN', 'KRM', 'SHIP', 'MDA', 'BLK', 'PRA', 'DADI', 'IDH', 'APH', 'CRW', 'PASC', 'HVN', 'FOTA', 'UUU', 'BCA', 'NMR', 'KEY', 'TRST', 'GETX', 'TFD', 'HMC', 'MTX', 'OMNI', 'MWAT', 'LKK', 'MOON', 'MOT', 'ATM', 'CAPP', 'OCT', 'DMD', 'BPT', 'RNT', 'GRC', 'ARN', '$PAC', 'CHP', 'ORME', 'VRC', 'FLASH', 'BBN', 'RADS', 'OAX', 'UCASH', 'SIB', 'RVR', 'BMC', 'DIM', 'CV', 'PURE', 'AIT', 'LA', 'PST', 'DXT', 'NCT', 'BERRY', 'EXP', 'CAT', 'PZM', 'XWC', 'DTB', 'DIVX', 'FLO', 'COV', 'XTO', 'UQC', 'ALQO', 'EDR', 'XPA', 'MLM', 'SLR', 'PARETO', 'ZAP', 'MUE', 'RMT', 'XMY', 'ICOS', 'NET', 'BEE', 'INCNT', 'HKN', 'RBY', 'BITUSD', 'IXT', 'PFR', 'RISE', 'AXP', 'DBET', 'LINDA', 'FAIR', 'NEU', 'XRL', 'PLBT', 'MUSE', 'BNTY', 'DNA', 'BIS', 'LMC', 'AUC', 'ART', 'TBAR', 'BSD', 'DOVU', 'NLC2', 'CLAM', 'COFI', 'CHSB', 'SLT', 'EBST', 'OK', 'LUX', 'BDG', 'FLUZ', 'QAU', 'OXY', 'REBL', 'ELIX', 'DICE', 'PTOY', 'LDC', 'EFX', 'LND', 'TIPS', 'NEOS', 'ENRG', 'REM', 'PRG', 'SWT', 'MUSIC', 'TUSD', 'ZLA', 'HXX', 'SNOV', 'POLIS', 'CAS', 'SPF', 'FLDC', 'DEB', 'DRT', 'NXC', 'ESP', 'EVR', 'LALA', 'WRC', 'IPBC', 'B2B', 'DBIX', 'LEV', 'ARY', 'INSTAR', 'EVE', 'FTX', 'CXO', 'PLU', 'BCC', 'SYNX', 'CVCOIN', 'XST', 'HBT', 'GLD', 'GAM', 'AVT', 'GBX', 'PINK', 'WCT', 'LOC', 'GOLOS', 'TCC', 'TIME', 'XSPEC', 'IPL', 'ATN', 'PKT', 'SWM', 'AU', 'MYST', 'NKC', 'ATB', 'MINT', 'CBT', 'XNK', 'NYC', 'BWK', 'FLIXX', 'DYN', 'NVC', 'IFT', 'SIG', 'TOA', 'CAN', 'ALIS', 'ADB', 'AUR', 'SPHR', 'RVT', 'PND', 'HWC', 'IPSX', 'GCR', 'BCY', 'CURE', 'PUT', 'RMC', 'LNC', 'DEV', 'AIR', 'TX', 'XLR', 'LIFE', 'HBZ', 'IOP', 'SRCOIN', 'CAG', 'COVAL', 'HGT', 'OBITS', 'HQX', 'ADH', 'MYB', 'FDX', 'SPD', 'SEQ', 'GET', 'ABY', 'SXUT', 'VIU', 'TKS', 'POSW', 'GLA', 'ECOB', 'BRX', 'TGT', 'PBL', 'KORE', 'POLL', 'TRF', 'ERO', 'ATL', 'CLR', 'XHV', 'GEO', 'HEAT', 'DTH', 'GAT', 'XBC', 'TFL', 'HYP', 'BLUE', 'UNIT', 'DOT', 'DOPE', 'OPT', 'CHX', 'EZT', 'OTN', 'QWARK', 'MEME', 'APX', 'SUMO', 'VOISE', 'CPAY', 'BTCZ', 'PIRL', 'J8T', 'PTC', 'ASTRO', 'KB3', 'XAUR', 'CSNO', 'AID', 'USNBT', 'XMCC', 'DERO', 'TRCT', 'EXCL', 'PING', 'SETH', 'NTRN', 'ERC', 'PRIX', 'SEXC', 'LEDU', 'MFG', 'SPR', 'CPY', 'MAX', 'VIT', 'HUSH', 'HYDRO', 'NIO', 'ADST', 'INXT', 'QRK', 'LOCI', 'PLAY', 'VRM', 'BON', 'ZEPH', 'SCL', 'CANN', 'RIC', 'BTDX', 'JIYO', 'DAN', 'CRED', '1337', 'BRK', '1WO', 'REAL', 'GMT', 'MSR', 'VTR', '2GIVE', 'FOR', 'DNR', 'MNTP', 'BET', 'AIX', 'PIPL', 'PIX', 'BUN', 'EXY', 'ING', 'REF', 'SHP', 'SPRTS', 'AMLT', 'CRB', 'IXC', 'MONK', 'UFR', 'BEZ', 'ZRC', 'BUZZ', 'PBT', 'PYLNT', 'EGC', 'MVC', 'ZEIT', 'KRB', 'DRP', 'VSL', 'EARTH', 'CMPCO', 'HUC', 'SENSE', 'BLU', 'SEND', 'WISH', 'SSS', 'AMM', 'FUNK', 'BIO', 'CBX', 'TES', 'ALT', 'SWIFT', 'ADC', 'GRFT', 'STAC', 'VZT', 'HIRE', 'CRAVE', 'TRUST', 'UFO', 'EVC', 'TRAK', 'XGOX', 'EFL', 'ACE', 'XMG', 'HAT', 'RUPX', 'RUP', 'TZC', 'TRC', 'VSX', 'SXC', 'INPAY', 'GCN', 'ODN', 'ZER', 'QVT', 'ANC', 'CRC', 'CREA', 'NKA', 'CHC', '808', 'DGPT', 'MAG', 'PCN', 'IC', 'HOLD', 'EBTC', 'SMS', 'NOBL', 'LINX', 'RAIN', 'ELLA', 'DAY', 'ITNS', 'ESZ', 'BBP', 'LATX', 'ZNY', 'STAK', 'EQT', 'XBP', 'DP', 'FYN', 'IND', 'TDX', 'YOC', 'MXT', 'KEK', 'CDN', 'EFYT', 'FANS', 'SCS', 'UNB', 'FRD', 'INN', 'PROC', 'UIS', 'LDOGE', 'PHO', 'TIG', 'ONX', 'XCN', 'NLX', 'CL', 'BTW', 'SAGA', 'DEM', 'JC', 'OCL', '42', 'SKIN', 'ONG', 'MTNC', 'ARC', 'VIVO', 'WAND', 'KZC', 'BYC', 'KLN', 'VULC', 'ARG', 'NMS', 'ELTCOIN', 'LOG', 'JEW', 'FCN', 'TRIA', 'LGD', 'MEC', 'ESC', 'MRT', 'BDL', 'FLIK', 'MZC', 'MBRS', 'STU', 'ZET', 'CTR', 'DCY', 'DGC', 'ORE', 'GCC', 'FST', 'TTC', 'WILD', 'MCAP', 'EQL', 'RNS', 'XPD', 'MOIN', 'POP', 'BSM', 'GRMD', 'FJC', 'DFT', 'GRWI', 'NSR', 'MAGE', 'BTA', 'ADZ', 'GUESS', 'GUN', 'MAC', 'OCC', 'XLC', 'BLITZ', 'DRXNE', 'AERM', 'DRPU', 'BRO', 'INSN', 'START', 'SKC', 'JET', 'MRJA', 'VRS', 'ATS', 'BTCS', 'SCT', 'UNIFY', 'MNE', '8BIT', 'HPC', 'SUR', 'FRST', 'IETH', 'EPY', 'LANA', 'RLT', 'OPC', 'QBIC', 'ACC', 'LCP', 'ARCT', 'PXC', 'ELE', 'UTC', 'CCRB', 'TROLL', 'VOT', 'BCF', 'ZCG', 'SGR', 'MOJO', 'XCPO', 'EL', 'IFLT', 'TKR', 'TRUMP', 'CUBE', 'WHL', 'CCT', 'ERC20', 'PAK', 'XBL', 'DAXX', 'SDRN', 'BTCRED', 'CESC', 'BITBTC', 'HBC', 'PLC', 'BOLI', 'TEK', 'CJ', 'SPACE', 'XCT', 'ATOM', 'IMX', 'GRLC', 'BLC', 'TOK', 'DSR', 'GRIM', 'KBR', 'ETG', 'STN', 'TOKC', 'RBT', 'CCN', 'DUO', 'BTCA', 'CHESS', 'TIT', 'ENT', 'JIN', 'BRIA', 'PASL', 'XRE', 'SHND', 'DDF', 'RPC', 'LTB', 'CTX', 'PXI', 'LEA', 'XCO', 'REE', 'C2', 'PNX', 'HNC', 'CHAN', 'OTX', 'PKB', 'NTO', 'NTWK', 'ETHD', 'EAGLE', 'NRO', 'DMB', 'GLT', 'BRAT', 'TRDT', 'CON', 'MCRN', 'VPRC', 'ABJ', 'BUMBA', 'DALC', 'XBTS', 'HONEY', 'BITEUR', 'LBTC', 'HVCO', 'POS', 'MAY', 'CXT', 'CACH', 'FUNC', 'AMS', 'XHI', 'PCOIN', 'NEWB', 'CNNC', 'EXN', 'MSCN', 'GEERT', 'CRDNC', 'PRC', 'DOLLAR', 'ARGUS', 'XRC', 'WOMEN', 'CREVA', 'CTIC3', 'GSR', 'COUPE', 'ULA', 'MGM', 'CALC', 'PIZZA', 'AI', 'AURA', 'GRID', 'CREDO', 'IDXM', 'EXRN', 'HDG', 'BQ', 'NPX', 'AC', 'KLC', 'NVST', 'CHIPS', 'HORSE', 'HAC', 'XNN', 'GOOD', 'STAR', 'ECN', 'RC', 'BPL', 'ORI', 'TIE', 'STA', 'ETT', 'DAR', 'BASH', 'CARBON', 'KOBO', 'TBX', 'AHT', 'EMV', 'FYP', 'LEAF', 'REX', 'ORB', 'UNI', 'WDC', 'ETBS', 'BRIT', 'SMLY', 'SHORTY', 'FLT', 'V', 'BXT', 'NDC', 'UNIC', 'HTC', 'CDX', 'FUCK', 'MBI', 'DEUS', 'BPC', 'XPTX', 'ZENI', 'METAL', 'RIYA', 'ICOO', 'ECASH', 'HERO', 'STRC', 'PIGGY', 'SDC', 'BIGUP', 'HBN', 'I0C', 'OPAL', 'REC', 'NETKO', 'CRM', 'TRI', 'Q2C', 'BTB', 'VTA', 'BTWTY', 'ITI', 'SNRG', 'GAIA', 'BLOCKPAY', 'TALK', 'EBET', 'ITT', 'ARI', 'ARCO', 'TRK', 'NYAN', 'HODL', 'TAG', 'HAL', 'KUSH', 'DSH', 'USC', 'MAO', 'IRL', 'SCORE', 'PR', 'XJO', 'SUPER', 'BITSILVER', 'GJC', 'CNT', 'CASH', 'XPY', 'TSE', 'WGO', 'SMC', 'GRN', 'SLG', 'MOTO', 'GOLF', 'TGC', 'BITS', 'XCXT', 'FLY', 'MANNA', 'DIX', 'POST', 'PHS', 'CCO', 'ISL', 'GAP', 'BITGOLD', 'EVIL', 'BITZ', 'VIDZ', 'CRX', 'SRC', 'CAB', 'MNM', 'EBCH', 'AMBER', 'BTCR', 'MARS', 'XRA', 'SPEX', 'EMD', 'GB', 'DTC', 'INFX', 'PX', 'KED', 'CNO', 'BERN', 'BSTY', 'SIGT', 'STV', 'FRC', '300', 'SWING', 'RED', 'NEVA', 'ZZC', 'AMMO', 'XIOS', 'ZUR', 'QBC', '888', 'MNC', 'RBIES', 'ELC', 'GLC', 'NUKO', 'ECO', 'MAD', 'QTL', 'VC', 'YAC', 'FNC', 'CTO', 'SCRT', 'KURT', 'MST', 'AIB', 'BTPL', 'J', 'SHDW', 'DRS', 'FIRE', 'TAJ', 'VISIO', 'SFC', '611', 'COAL', 'BTQ', 'SOON', 'HMP', 'ACOIN', 'XBTC21', 'BOST', 'DLC', 'YTN', 'B@', 'STARS', '$$$', 'SOIL', 'EUC', 'BENJI', 'UNITS', 'GP', 'CPN', 'ALL', 'FLAX', 'BIP', 'DBTC', 'ERY', 'MTLMC3', 'GLS', 'VUC', 'ROOFS', 'FUZZ', 'CF', 'AGLC', 'ASAFE2', 'MAR', 'KRONE', 'GPL', 'WARP', 'MDC', 'JS', 'ICOB', 'SONG', 'UET', 'URO', 'QCN', 'XCRE', 'PULSE', 'SH', 'ADCN', 'BSTAR', 'BXC', 'BNX', 'BAS', 'VLT', 'ZMC', 'DLISK', 'VIP', 'WORM', 'BLN', 'PRX', 'IMS', 'JWL', 'DRM', 'RIDE', 'SLEVIN', 'ARB', 'BSC', 'RKC', 'MILO', 'LUNA', 'BIOS', 'STEPS', 'ITZ', 'PONZI', 'VEC2', 'OFF', 'ATX', 'PIE', 'GBC', 'MND', 'PLACO', 'LIR', 'LTCU', 'ICON', 'LTCR', 'IMPS', 'OS76', 'JOBS', 'RSGP', 'DES', 'CWXT', 'WBB', 'ZNE', 'TAGR', 'PLNC', 'ZYD', 'BOAT', 'PEX', 'SANDG', 'ACP', 'VOLT', 'ELS', 'BIOB', 'IBANK', 'SOCC', 'SLFI', 'P7C', 'NANOX', 'NODC', 'CONX', 'CTIC2', 'VLTC', 'LVPS', 'TSTR', 'FXE', 'EBT', 'CKUSD', 'TTT', 'PNT', 'MT', 'ATMC', 'KCASH', 'DAX', 'STC', 'EOSDAC', 'IPC', 'MEET', 'NOAH', 'CHAT', 'DIG', 'LRN', 'XMC', 'SHOW', 'AAC', 'RCT', 'TOPC', 'MOF', 'FRGC', 'IQT', 'BCX', 'ADI', 'AWR', 'BSTN', 'OF', 'SBTC', 'FIL', 'UBTC', 'SCC', 'DRG', 'ADK', 'MTC', 'SSC', 'BIG', 'VIPS', 'XTZ', 'XMO', 'VLC', 'HLC', 'GEM', 'VME', 'XUC', 'READ', 'OC', 'PRS', 'WETH', 'WC', 'LIGHT', 'EPC', 'MRK', 'MITX', 'CFUN', 'UIP', 'HPY', 'SUP', 'FID', 'PLAN', 'BCI', 'TNS', 'IDT', 'CMS', 'CJT', 'RBLX', 'CVH', 'CMCT', 'APC', 'LIVE', 'MOAC', 'BCDN', 'XID', 'BTRN', 'SWTC', 'QUBE', 'ATC', 'ECH', 'B2X', 'CROP', 'XTL', 'PCS', 'BBC', 'BELA', 'AMN', 'SNIP', 'WIN', 'BRM', 'SEN', 'THS', 'CANDY', 'BBI', 'NBAI', 'AVH', 'BUBO', 'TDS', 'GCS', 'PCL', 'IFC', 'SBC', 'ANI', 'BETR', 'HADE', 'ACES', 'PHI', 'CLD', 'BSN', 'XOT', 'MSD', 'GBG', 'FDZ', 'W3C', 'GARY', 'LEPEN', 'BAR', 'ABC', 'PRES', 'CLUB', 'CEFS', 'BITCF', 'SIC', 'TESLA', 'WA', 'XSTC', 'EMB', 'TCOIN', 'EAG', 'SLOTH', 'LST', 'MINEX', 'MCR', 'EDT', 'GOD', 'HDLB', 'HC', 'KDC', 'RUNNERS', 'UTT', 'OX', 'ERA', 'STEX', 'TURBO', 'ZENGOLD', 'SPK', 'ATMOS', 'NAMO', 'REGA', 'ZSE', 'UNRC', 'DAV', 'SONO', 'RBBT', 'AV', 'ZBC', 'INDI', 'HCC', 'XRY', 'GDC', 'MCI', 'PRN', 'TLE', 'UNITY', 'TER', 'NOX', 'EDRC', 'TELL', 'SJCX', 'MARX', 'ELITE', 'SJW', 'QORA', 'UR', 'RYZ', 'DUTCH', 'CFC', 'CYDER', 'MAGN', 'FRN', 'SKR', 'BTCM', 'DON', 'SKULL', 'MBL', 'GMX', 'NUMUS', 'TOP', 'WINK', 'ANTX', 'BIT', 'PROUD', 'GRX', 'WIC', 'TOPAZ', 'BLAZR', 'EGG', 'BUB', 'PRIMU', 'AKY', 'BEST', 'PLX', 'HALLO', 'ACN', 'SHA', 'AXIOM', 'ROYAL', 'SIGMA', 'LEVO', 'CC', 'WSX', 'SISA', 'SMOKE', 'DASHS', 'LDCN', 'COR', 'NEOG', 'BTBc', 'DMC', 'INDIA', 'TODAY', 'DCRE', 'FAP', 'OPES', 'FAZZ', 'HIGH', 'BIRDS', 'ASN', 'FUTC', 'XTD', 'LKC', 'GAIN', 'UNC', 'KARMA', 'CRYPT', 'HYPER', 'XQN', 'SAK', 'TRICK', 'SHELL', 'CYC', 'FONZ', 'MONETA', 'X2', 'OP', 'DISK', 'RICHX', 'PRM', 'POKE', 'SPORT', 'OMC', 'LAZ', 'NBIT', 'KASHH', 'CHEAP', 'BITOK', 'EREAL', 'BT2', 'BTE', 'DML', 'XVC', 'FRCT', 'KST'],
  displayList: () => {
    tickers.symbol.forEach(symbol => {
      $('#js-coin-list').append(`<option value="${symbol}" id="${symbol}">${symbol}</option>`);
    });
  },
};

////////////////////////////////////
// RUN PROGRAM
////////////////////////////////////
const launch = {
  initialize: () => {
    $(document).ready(() => {
      $('.mdb-select').material_select();
      // SET INITIAL CRYPTO ON LOAD
      crypto.prices('BTC', display.prices);
      crypto.topExchanges('BTC', display.topExchanges)
    });
  },
  displayTickers: () => {
    tickers.displayList();
  },
  renderTickerResults: () => {
    const ticker = $('#js-coin-list').on('change', event => {
      let symbol = $(event.target).val();
      crypto.prices(`${symbol}`, display.prices);
      crypto.topExchanges(`${symbol}`, display.prices);
    });
    return ticker;
  },
  all: () => {
    launch.initialize();
    launch.displayTickers();
    launch.renderTickerResults();
  },
};

$(() => {
  launch.all();
});