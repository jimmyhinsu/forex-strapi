import type { Struct, Schema } from '@strapi/strapi';

export interface WhyforexWhyforex extends Struct.ComponentSchema {
  collectionName: 'components_whyforex_whyforexes';
  info: {
    displayName: 'whyforex';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    whyforeximg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface WhatsetsusapartdetailsWhatsetsusapartdetails
  extends Struct.ComponentSchema {
  collectionName: 'components_whatsetsusapartdetails_whatsetsusapartdetails';
  info: {
    displayName: 'whatsetsusapartdetails';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface WhatsetsusapartWhatsetsusapart extends Struct.ComponentSchema {
  collectionName: 'components_whatsetsusapart_whatsetsusaparts';
  info: {
    displayName: 'whatsetsusapart';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    whatsetsusapartdetails: Schema.Attribute.Component<
      'whatsetsusapartdetails.whatsetsusapartdetails',
      true
    >;
  };
}

export interface Whatismt5Whatismt5 extends Struct.ComponentSchema {
  collectionName: 'components_whatismt5_whatismt5s';
  info: {
    displayName: 'whatismt5';
  };
  attributes: {
    title: Schema.Attribute.String;
    description1: Schema.Attribute.String;
    description2: Schema.Attribute.String;
    whatismt5img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface WhatisforexWhatisforex extends Struct.ComponentSchema {
  collectionName: 'components_whatisforex_whatisforexes';
  info: {
    displayName: 'whatisforex';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description1: Schema.Attribute.String;
    description2: Schema.Attribute.String;
    description3: Schema.Attribute.String;
    whatisforeximg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface TradeforexTradeforex extends Struct.ComponentSchema {
  collectionName: 'components_tradeforex_tradeforexes';
  info: {
    displayName: 'tradeforex';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    tradeforeximg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ThefactordetailsThefactordetails
  extends Struct.ComponentSchema {
  collectionName: 'components_thefactordetails_thefactordetails';
  info: {
    displayName: 'thefactordetails';
  };
  attributes: {
    label1: Schema.Attribute.String;
    title: Schema.Attribute.String;
    label2: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface ThefactorThefactor extends Struct.ComponentSchema {
  collectionName: 'components_thefactor_thefactors';
  info: {
    displayName: 'thefactor';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    thefactordetails: Schema.Attribute.Component<
      'thefactordetails.thefactordetails',
      true
    >;
  };
}

export interface TeamupwithforexTeamupwithforex extends Struct.ComponentSchema {
  collectionName: 'components_teamupwithforex_teamupwithforexes';
  info: {
    displayName: 'teamupwithforex';
  };
  attributes: {
    title: Schema.Attribute.String;
    description1: Schema.Attribute.String;
    description2: Schema.Attribute.String;
  };
}

export interface StandardaccountincludesdetailsStandardaccountincludesdetails
  extends Struct.ComponentSchema {
  collectionName: 'components_standardaccountincludesdetails_standardaccountincludesdetails';
  info: {
    displayName: 'standardaccountincludesdetails';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface StandardaccountincludesStandardaccountincludes
  extends Struct.ComponentSchema {
  collectionName: 'components_standardaccountincludes_standardaccountincludes';
  info: {
    displayName: 'standardaccountincludes';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    standardaccountincludesdetails: Schema.Attribute.Component<
      'whatsetsusapartdetails.whatsetsusapartdetails',
      true
    >;
  };
}

export interface ProaccountincludedetailProaccountincludedetail
  extends Struct.ComponentSchema {
  collectionName: 'components_proaccountincludedetail_proaccountincludedetails';
  info: {
    displayName: 'proaccountincludedetail';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ProaccountincludeProaccountinclude
  extends Struct.ComponentSchema {
  collectionName: 'components_proaccountinclude_proaccountincludes';
  info: {
    displayName: 'Proaccountinclude';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface PriceandtitlePriceandtitle extends Struct.ComponentSchema {
  collectionName: 'components_priceandtitle_priceandtitles';
  info: {
    displayName: 'priceandtitle';
  };
  attributes: {
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PlatformsPlatforms extends Struct.ComponentSchema {
  collectionName: 'components_platforms_platforms';
  info: {
    displayName: 'Platforms';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    description: Schema.Attribute.String;
    meta5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PartneringperksdetailsPartneringperksdetails
  extends Struct.ComponentSchema {
  collectionName: 'components_partneringperksdetails_partneringperksdetails';
  info: {
    displayName: 'partneringperksdetails';
    description: '';
  };
  attributes: {
    imags: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface PartneringperksPartneringperks extends Struct.ComponentSchema {
  collectionName: 'components_partneringperks_partneringperks';
  info: {
    displayName: 'partneringperks';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    partneringperksdetails: Schema.Attribute.Component<
      'partneringperksdetails.partneringperksdetails',
      true
    >;
  };
}

export interface OurproductdetailOurproductdetail
  extends Struct.ComponentSchema {
  collectionName: 'components_ourproductdetail_ourproductdetails';
  info: {
    displayName: 'ourproductdetail';
    description: '';
  };
  attributes: {
    tag: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::tagsinput.tags'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    foreximg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    priceandtitle: Schema.Attribute.Component<
      'priceandtitle.priceandtitle',
      true
    >;
  };
}

export interface OurproductOurproduct extends Struct.ComponentSchema {
  collectionName: 'components_ourproduct_ourproducts';
  info: {
    displayName: 'ourproduct';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    tag: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::tagsinput.tags'>;
    ourproductdetail: Schema.Attribute.Component<
      'ourproductdetail.ourproductdetail',
      true
    >;
  };
}

export interface Mt5TradingplatformMt5Tradingplatform
  extends Struct.ComponentSchema {
  collectionName: 'components_mt5tradingplatform_mt5tradingplatforms';
  info: {
    displayName: 'mt5tradingplatform';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description1: Schema.Attribute.String;
    description2: Schema.Attribute.String;
    mt5img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LicencedetailsLicencedetails extends Struct.ComponentSchema {
  collectionName: 'components_licencedetails_licencedetails';
  info: {
    displayName: 'licencedetails';
    description: '';
  };
  attributes: {
    licenceimgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    button: Schema.Attribute.String;
    pdffile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LicenceLicence extends Struct.ComponentSchema {
  collectionName: 'components_licence_licences';
  info: {
    displayName: 'licence';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface LeverageLeverage extends Struct.ComponentSchema {
  collectionName: 'components_leverage_leverages';
  info: {
    displayName: 'leverage';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HerobannerHerobanner extends Struct.ComponentSchema {
  collectionName: 'components_herobanner_herobanners';
  info: {
    displayName: 'herobanner';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    meta5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface GetintouchGetintouch extends Struct.ComponentSchema {
  collectionName: 'components_getintouch_getintouches';
  info: {
    displayName: 'getintouch';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface ForexthreeboxForexthreebox extends Struct.ComponentSchema {
  collectionName: 'components_forexthreebox_forexthreeboxes';
  info: {
    displayName: 'forexthreebox';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface FeaturesdetailsFeaturesdetails extends Struct.ComponentSchema {
  collectionName: 'components_featuresdetails_featuresdetails';
  info: {
    displayName: 'featuresdetails';
  };
  attributes: {
    Featuresimgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Featuresdetails: Schema.Attribute.Component<
      'featuresdetails.featuresdetails',
      true
    >;
  };
}

export interface EstablisheddetailsEstablisheddetails
  extends Struct.ComponentSchema {
  collectionName: 'components_establisheddetails_establisheddetails';
  info: {
    displayName: 'establisheddetails';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    numbers: Schema.Attribute.Integer;
  };
}

export interface EstablishedEstablished extends Struct.ComponentSchema {
  collectionName: 'components_established_establisheds';
  info: {
    displayName: 'established';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    establisheddetails: Schema.Attribute.Component<
      'establisheddetails.establisheddetails',
      true
    >;
  };
}

export interface EcnaccountincludesEcnaccountincludes
  extends Struct.ComponentSchema {
  collectionName: 'components_ecnaccountincludes_ecnaccountincludes';
  info: {
    displayName: 'ecnaccountinclude';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface EcnaccountincludedetailsEcnaccountincludedetails
  extends Struct.ComponentSchema {
  collectionName: 'components_ecnaccountincludedetails_ecnaccountincludedetails';
  info: {
    displayName: 'ecnaccountincludedetails';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface EcnaccountincludeEcnaccountinclude
  extends Struct.ComponentSchema {
  collectionName: 'components_ecnaccountinclude_ecnaccountincludes';
  info: {
    displayName: 'ecnaccountinclude';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    ecnaccountincludedetails: Schema.Attribute.Component<
      'ecnaccountincludedetails.ecnaccountincludedetails',
      true
    >;
  };
}

export interface Downloadmt5Downloadmt5 extends Struct.ComponentSchema {
  collectionName: 'components_downloadmt5_downloadmt5s';
  info: {
    displayName: 'downloadmt5';
  };
  attributes: {
    meta5: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    metatrader5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContactimgContactimg extends Struct.ComponentSchema {
  collectionName: 'components_contactimg_contactimgs';
  info: {
    displayName: 'contactimg';
  };
  attributes: {
    contactimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommitteddetailsCommitteddetails
  extends Struct.ComponentSchema {
  collectionName: 'components_committeddetails_committeddetails';
  info: {
    displayName: 'committeddetails';
  };
  attributes: {
    committedimgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
  };
}

export interface CommittedCommitted extends Struct.ComponentSchema {
  collectionName: 'components_committed_committeds';
  info: {
    displayName: 'committed';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    committeddetails: Schema.Attribute.Component<
      'committeddetails.committeddetails',
      true
    >;
  };
}

export interface ChoosewheredetailsChoosewheredetails
  extends Struct.ComponentSchema {
  collectionName: 'components_choosewheredetails_choosewheredetails';
  info: {
    displayName: 'choosewheredetails';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ChoosewhereChoosewhere extends Struct.ComponentSchema {
  collectionName: 'components_choosewhere_choosewheres';
  info: {
    displayName: 'Choosewhere';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    gotonext: Schema.Attribute.Component<
      'choosewheredetails.choosewheredetails',
      true
    >;
  };
}

export interface BenefitsofbecomingdetailsBenefitsofbecomingdetails
  extends Struct.ComponentSchema {
  collectionName: 'components_benefitsofbecomingdetails_benefitsofbecomingdetails';
  info: {
    displayName: 'benefitsofbecomingdetails';
  };
  attributes: {
    benefitsimgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface BenefitsofbecomingBenefitsofbecoming
  extends Struct.ComponentSchema {
  collectionName: 'components_benefitsofbecoming_benefitsofbecomings';
  info: {
    displayName: 'benefitsofbecoming';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    benefitsofbecomingdetails: Schema.Attribute.Component<
      'benefitsofbecomingdetails.benefitsofbecomingdetails',
      true
    >;
  };
}

export interface BenefitfromdetailsBenefitfromdetails
  extends Struct.ComponentSchema {
  collectionName: 'components_benefitfromdetails_benefitfromdetails';
  info: {
    displayName: 'Benefitfromdetails';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface BenefitfromBenefitfrom extends Struct.ComponentSchema {
  collectionName: 'components_benefitfrom_benefitfroms';
  info: {
    displayName: 'Benefitfrom';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    Benefittable: Schema.Attribute.Component<
      'benefitfromdetails.benefitfromdetails',
      true
    >;
  };
}

export interface BecomeanforexdetailsBecomeanforexdetails
  extends Struct.ComponentSchema {
  collectionName: 'components_becomeanforexdetails_becomeanforexdetails';
  info: {
    displayName: 'becomeanforexdetails';
  };
  attributes: {
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface BecomeanforexBecomeanforex extends Struct.ComponentSchema {
  collectionName: 'components_becomeanforex_becomeanforexes';
  info: {
    displayName: 'becomeanforex';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    becomeanforexdetails: Schema.Attribute.Component<
      'becomeanforexdetails.becomeanforexdetails',
      true
    >;
  };
}

export interface AnnouncingAnnouncing extends Struct.ComponentSchema {
  collectionName: 'components_announcing_announcings';
  info: {
    displayName: 'Announcing';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    button: Schema.Attribute.String;
    homeIbSectionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AccountsAccounts extends Struct.ComponentSchema {
  collectionName: 'components_accounts_accounts';
  info: {
    displayName: 'Accounts';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    accountdetail1: Schema.Attribute.Component<
      'accountdetail.accountdetail',
      true
    >;
  };
}

export interface AccountdetailAccountdetail extends Struct.ComponentSchema {
  collectionName: 'components_accountdetail_accountdetails';
  info: {
    displayName: 'accountdetail';
    description: '';
  };
  attributes: {
    Standard: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    cardlable1: Schema.Attribute.String;
    cardlable2: Schema.Attribute.String;
    cardlable3: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'whyforex.whyforex': WhyforexWhyforex;
      'whatsetsusapartdetails.whatsetsusapartdetails': WhatsetsusapartdetailsWhatsetsusapartdetails;
      'whatsetsusapart.whatsetsusapart': WhatsetsusapartWhatsetsusapart;
      'whatismt5.whatismt5': Whatismt5Whatismt5;
      'whatisforex.whatisforex': WhatisforexWhatisforex;
      'tradeforex.tradeforex': TradeforexTradeforex;
      'thefactordetails.thefactordetails': ThefactordetailsThefactordetails;
      'thefactor.thefactor': ThefactorThefactor;
      'teamupwithforex.teamupwithforex': TeamupwithforexTeamupwithforex;
      'standardaccountincludesdetails.standardaccountincludesdetails': StandardaccountincludesdetailsStandardaccountincludesdetails;
      'standardaccountincludes.standardaccountincludes': StandardaccountincludesStandardaccountincludes;
      'proaccountincludedetail.proaccountincludedetail': ProaccountincludedetailProaccountincludedetail;
      'proaccountinclude.proaccountinclude': ProaccountincludeProaccountinclude;
      'priceandtitle.priceandtitle': PriceandtitlePriceandtitle;
      'platforms.platforms': PlatformsPlatforms;
      'partneringperksdetails.partneringperksdetails': PartneringperksdetailsPartneringperksdetails;
      'partneringperks.partneringperks': PartneringperksPartneringperks;
      'ourproductdetail.ourproductdetail': OurproductdetailOurproductdetail;
      'ourproduct.ourproduct': OurproductOurproduct;
      'mt5tradingplatform.mt5tradingplatform': Mt5TradingplatformMt5Tradingplatform;
      'licencedetails.licencedetails': LicencedetailsLicencedetails;
      'licence.licence': LicenceLicence;
      'leverage.leverage': LeverageLeverage;
      'herobanner.herobanner': HerobannerHerobanner;
      'getintouch.getintouch': GetintouchGetintouch;
      'forexthreebox.forexthreebox': ForexthreeboxForexthreebox;
      'featuresdetails.featuresdetails': FeaturesdetailsFeaturesdetails;
      'features.features': FeaturesFeatures;
      'establisheddetails.establisheddetails': EstablisheddetailsEstablisheddetails;
      'established.established': EstablishedEstablished;
      'ecnaccountincludes.ecnaccountincludes': EcnaccountincludesEcnaccountincludes;
      'ecnaccountincludedetails.ecnaccountincludedetails': EcnaccountincludedetailsEcnaccountincludedetails;
      'ecnaccountinclude.ecnaccountinclude': EcnaccountincludeEcnaccountinclude;
      'downloadmt5.downloadmt5': Downloadmt5Downloadmt5;
      'contactimg.contactimg': ContactimgContactimg;
      'committeddetails.committeddetails': CommitteddetailsCommitteddetails;
      'committed.committed': CommittedCommitted;
      'choosewheredetails.choosewheredetails': ChoosewheredetailsChoosewheredetails;
      'choosewhere.choosewhere': ChoosewhereChoosewhere;
      'benefitsofbecomingdetails.benefitsofbecomingdetails': BenefitsofbecomingdetailsBenefitsofbecomingdetails;
      'benefitsofbecoming.benefitsofbecoming': BenefitsofbecomingBenefitsofbecoming;
      'benefitfromdetails.benefitfromdetails': BenefitfromdetailsBenefitfromdetails;
      'benefitfrom.benefitfrom': BenefitfromBenefitfrom;
      'becomeanforexdetails.becomeanforexdetails': BecomeanforexdetailsBecomeanforexdetails;
      'becomeanforex.becomeanforex': BecomeanforexBecomeanforex;
      'announcing.announcing': AnnouncingAnnouncing;
      'accounts.accounts': AccountsAccounts;
      'accountdetail.accountdetail': AccountdetailAccountdetail;
    }
  }
}
