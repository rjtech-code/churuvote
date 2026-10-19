/**
 * English display metadata for the document inventory.
 *
 * The source inventory (documents.generated.ts) stays the single source of truth and is
 * never modified. This file only adds English labels. Titles that are already English in
 * the source are shown as-is; original file names, folder names, URLs, page counts and
 * sizes are never translated.
 */
import type { ElectionKey } from './types'

export const ELECTIONS_EN: Record<ElectionKey, string> = {
  'zp-ps': 'ZP-PS Election',
  'sarpanch-panch': 'Sarpanch-Panch Election',
}

/** Group labels (source ZIP folders) — keyed by group key. */
export const GROUPS_EN: Record<string, string> = {
  'ps/training': 'Training PPTs',
  'ps/filled-forms': 'Filled-in forms',
  'ps/checklist': 'Checklists',
  'ps/documents-envelopes': 'Documents and envelopes',
  'ps/main-order/nomination': 'Main orders · At nomination',
  'ps/main-order/symbol-allotment': 'Main orders · At symbol allotment',
  'ps/main-order/counting': 'Main orders · At counting',
  'ps/main-order/mcc': 'Main orders · Model Code of Conduct',
  'ps/main-order/misc': 'Main orders · Miscellaneous orders',
  'ps/circular': 'Circulars',
  'panch/main': 'Main files',
  'panch/material': 'Election material',
  'panch/circular': 'Circulars',
  'panch/valid-invalid': 'Valid and invalid ballot papers',
}

/** Homepage document types — keyed by type key. */
export const TYPES_EN: Record<string, string> = {
  train: 'Training PPTs',
  forms: 'Filled-in forms',
  check: 'Checklists',
  docs: 'Documents & envelopes',
  order: 'Main orders',
  circ: 'Circulars',
  ballot: 'Valid / invalid ballots',
  rules: 'Rules & sections',
}

/** Election-page sections — keyed by section key. */
export const SECTIONS_EN: Record<string, string> = {
  train: 'Training PPTs',
  forms: 'Filled-in forms',
  check: 'Checklists',
  docs: 'Documents and envelopes',
  rules: 'Rules & sections',
  'o-nom': 'Orders · Nomination and eligibility',
  'o-sym': 'Orders · Symbols and ballot papers',
  'o-count': 'Orders · Counting',
  'o-mcc': 'Orders · Code of conduct and campaigning',
  'o-misc': 'Orders · Miscellaneous',
  circ: 'Circulars',
  ballot: 'Valid and invalid ballot papers',
}

/** Display titles used for the Sarpanch-Panch highlights — keyed by document id. */
export const HIGHLIGHTS_EN: Record<string, string> = {
  'panch-main-1-pdf-for-ro-sarpanch-final': 'Training of Returning Officers (RO)',
  'panch-main-2-pdf-for-po-sarpanch-final': 'Training of Polling Officers (PO)',
  'panch-material-material-3-2026': 'Eligibility for the posts of Sarpanch and Panch (Section 19)',
  'panch-main-main-4-2026': 'Filled-in forms, Panchayat Election 2026',
  'panch-material-7-counting-panch-sarpanch': 'Counting of votes (Sarpanch-Panch)',
  'panch-material-material-7-8': 'Return of result (Form 7) and certificate of election (Form 8), filled in',
}

/**
 * English titles for documents whose source title is Hindi or mixed — keyed by the exact
 * source title (the same title can appear in both elections' folders).
 */
export const TITLES_EN: Record<string, string> = {
  'आर्दश आचार संहिता': 'Model Code of Conduct',
  'भरे हुए प्रपत्र (ZP PS) For Candidate 2026': 'Filled-in forms (ZP PS) for candidates 2026',
  'भरे हुए प्रपत्र (ZP PS) For Polling Party': 'Filled-in forms (ZP PS) for the polling party',
  'RO NOMINATION SCRUTINY REGISTER पंचायत समिति सदस्य जिला परिषद् सदस्य':
    'RO nomination scrutiny register — Panchayat Samiti member, Zila Parishad member',
  'प्रश्नावली राजस्थान पंचायती राज चुनाव 2026': 'Questionnaire: Rajasthan Panchayati Raj Election 2026',
  'मेमो': 'Memo',
  'नाम निर्देषन पत्र ZP PS के साथ प्रस्तुत किये जाने वाले दस्तावेज':
    'Documents to be submitted with the nomination paper (ZP PS)',
  'लिफाफे पंचायत समिति एवं जिला परिषद् चुनाव 2026': 'Envelopes — Panchayat Samiti and Zila Parishad Election 2026',
  'प्रतिभूति निक्षेप': 'Security deposit',
  'प्रारूप क व प्रारूप ख': 'Format क (A) and Format ख (B)',
  'ZP & PS मतपत्र का प्रारूप': 'ZP & PS ballot paper format',
  'पंचायतीराज संस्थाओं के चुनाव में प्रयुक्त होने वाले आरक्षित & Free Symbol':
    'Reserved & free symbols used in Panchayati Raj institution elections',
  'आदर्श आचरण संहिता अधिकतम चुनाव खर्च सीमा एवं इस आदेश का उल्लंघन':
    'Model Code of Conduct: maximum election expenditure limit and violation of this order',
  'प्रशासक संबधि आदेश': 'Order regarding administrators',
  'प्रशासक संबधि त्यागपत्र आदेश': 'Order regarding administrators — resignation',
  'दस्तावेज संबधि आदेश ZP PS': 'Order regarding documents (ZP PS)',
  'दस्तावेज संबधि आदेश Sapanch': 'Order regarding documents (Sarpanch)',
  'डाक मत पत्रों की मतगणना': 'Counting of postal ballot papers',
  'नगरपालिका में जेल में बंद डाक मत पत्र': 'Postal ballot papers of persons in jail (municipal elections)',
  'अमिट स्याही संबधि आदेश': 'Order regarding indelible ink',
  'मतगणना प्रारूप 21,22,23': 'Counting formats 21, 22, 23',
  'मतपत्रों के प्रारूप नगरपालिका चुनाव': 'Ballot paper formats — municipal elections',
  'मतपत्रों के प्रारूप': 'Ballot paper formats',
  'मतगणना सरपंच के चुनाव हो': 'Counting of votes in Sarpanch elections',
  'मतगणना जब EVM प्रयुक्त हो': 'Counting of votes where EVMs are used',
  'नगरीय चुनाव में मॉक-पोल संबधि आदेश': 'Order regarding mock poll in urban elections',
  'पंचायतीराज चुनाव में EVM में मॉक-पोल संबधि आदेश': 'Order regarding EVM mock poll in Panchayati Raj elections',
  'पंचायतीराज चुनाव में मॉक-पोल संबधि आदेश': 'Order regarding mock poll in Panchayati Raj elections',
  'डाक मत के आदेश': 'Orders regarding postal ballots',
  'EVM तथा निविदत्त मतों के मुद्रण के आदेश': 'Orders on EVMs and printing of tendered ballot papers',
  'मतपत्रों के अधिप्रमाणन के आदेश': 'Orders on authentication of ballot papers',
  'पहचान के दस्तावेज के आदेश': 'Orders on identity documents',
  'प्रतिभूति निक्षेप राशी को जमा कराने के आदेश': 'Orders on depositing the security deposit amount',
  'प्रतिभूति निक्षेप राशी को जमा कराने के Format': 'Format for depositing the security deposit amount',
  'MPSV मशीन से संबधित आदेश': 'Orders regarding the MPSV machine',
  'नाम निर्देषन पत्र के साथ प्रस्तुत किये जाने वाले दस्तावेज': 'Documents to be submitted with the nomination paper',
  'भरे हुए प्रपत्र पंचायत चुनाव 2026': 'Filled-in forms, Panchayat Election 2026',
  'सरपंच - पंच पद के लिए पात्रता 2026': 'Eligibility for the posts of Sarpanch and Panch 2026',
  'पंचायत परिणाम प्रारूप 7 एवं 8': 'Panchayat result Forms 7 and 8',
}
