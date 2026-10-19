// AUTO-GENERATED from the reference document inventory. Do not edit by hand;
// regenerate instead. Titles, page counts and sizes are copied from the source.
import type { DocGroup, DocItem, DocType, DocSection, HighlightItem } from './types'

export const ELECTIONS = {
 "zp-ps": "ZP-PS चुनाव",
 "sarpanch-panch": "सरपंच-पंच चुनाव"
} as const

export const GROUPS: DocGroup[] = [
 {
  "key": "ps/training",
  "election": "zp-ps",
  "label": "प्रशिक्षण PPT",
  "sourceFolder": "1- Training (ZP-PS)"
 },
 {
  "key": "ps/filled-forms",
  "election": "zp-ps",
  "label": "भरे हुए प्रपत्र",
  "sourceFolder": "2-भरे हुए प्रपत्र (ZP PS)"
 },
 {
  "key": "ps/checklist",
  "election": "zp-ps",
  "label": "चेकलिस्ट",
  "sourceFolder": "3-Checklist"
 },
 {
  "key": "ps/documents-envelopes",
  "election": "zp-ps",
  "label": "दस्तावेज़ और लिफ़ाफ़े",
  "sourceFolder": "4-Document - Envalop In Zp-Ps Election"
 },
 {
  "key": "ps/main-order/nomination",
  "election": "zp-ps",
  "label": "मुख्य आदेश · नामांकन के समय",
  "sourceFolder": "1- At Nomination"
 },
 {
  "key": "ps/main-order/symbol-allotment",
  "election": "zp-ps",
  "label": "मुख्य आदेश · चुनाव चिह्न आवंटन के समय",
  "sourceFolder": "2-At Time Of Symbol Allotment"
 },
 {
  "key": "ps/main-order/counting",
  "election": "zp-ps",
  "label": "मुख्य आदेश · मतगणना के समय",
  "sourceFolder": "3- At Counting"
 },
 {
  "key": "ps/main-order/mcc",
  "election": "zp-ps",
  "label": "मुख्य आदेश · आदर्श आचार संहिता",
  "sourceFolder": "4- At MCC"
 },
 {
  "key": "ps/main-order/misc",
  "election": "zp-ps",
  "label": "मुख्य आदेश · विविध आदेश",
  "sourceFolder": "5-विविध आदेश"
 },
 {
  "key": "ps/circular",
  "election": "zp-ps",
  "label": "परिपत्र",
  "sourceFolder": "6- Circular"
 },
 {
  "key": "panch/main",
  "election": "sarpanch-panch",
  "label": "मुख्य फ़ाइलें",
  "sourceFolder": "Sarpanch-Panch Election 2026"
 },
 {
  "key": "panch/material",
  "election": "sarpanch-panch",
  "label": "निर्वाचन सामग्री",
  "sourceFolder": "ज़िप के बाद मिली फ़ाइलें"
 },
 {
  "key": "panch/circular",
  "election": "sarpanch-panch",
  "label": "परिपत्र",
  "sourceFolder": "5- Circular"
 },
 {
  "key": "panch/valid-invalid",
  "election": "sarpanch-panch",
  "label": "मान्य-अमान्य मतपत्र",
  "sourceFolder": "5-Valid-Invalid Ballot Paper"
 }
]

/** Document types used on the homepage library (source "cats"). */
export const DOC_TYPES: DocType[] = [
 {
  "key": "train",
  "label": "प्रशिक्षण PPT"
 },
 {
  "key": "forms",
  "label": "भरे हुए प्रपत्र"
 },
 {
  "key": "check",
  "label": "चेकलिस्ट"
 },
 {
  "key": "docs",
  "label": "दस्तावेज़-लिफ़ाफ़े"
 },
 {
  "key": "order",
  "label": "मुख्य आदेश"
 },
 {
  "key": "circ",
  "label": "परिपत्र"
 },
 {
  "key": "ballot",
  "label": "मान्य-अमान्य मतपत्र"
 },
 {
  "key": "rules",
  "label": "नियम-धाराएँ"
 }
]

/** Finer sections used on the per-election pages (source "secs"). */
export const DOC_SECTIONS: DocSection[] = [
 {
  "key": "train",
  "label": "प्रशिक्षण PPT"
 },
 {
  "key": "forms",
  "label": "भरे हुए प्रपत्र"
 },
 {
  "key": "check",
  "label": "चेकलिस्ट"
 },
 {
  "key": "docs",
  "label": "दस्तावेज़ और लिफ़ाफ़े"
 },
 {
  "key": "rules",
  "label": "नियम-धाराएँ"
 },
 {
  "key": "o-nom",
  "label": "आदेश · नामांकन और पात्रता"
 },
 {
  "key": "o-sym",
  "label": "आदेश · चुनाव चिह्न और मतपत्र"
 },
 {
  "key": "o-count",
  "label": "आदेश · मतगणना"
 },
 {
  "key": "o-mcc",
  "label": "आदेश · आचार संहिता और प्रचार"
 },
 {
  "key": "o-misc",
  "label": "आदेश · विविध"
 },
 {
  "key": "circ",
  "label": "परिपत्र"
 },
 {
  "key": "ballot",
  "label": "मान्य-अमान्य मतपत्र"
 }
]

/** Filled-in form collections highlighted next to the RO guide. */
export const FEATURED_FORMS: string[] = [
 "ps-filled-forms-1-zp-ps-for-candidate-2026",
 "ps-filled-forms-2-zp-ps-for-polling-party",
 "panch-main-main-4-2026"
]

/** Sarpanch-Panch page highlights, with the display titles used by the source. */
export const SARPANCH_HIGHLIGHTS: HighlightItem[] = [
 {
  "id": "panch-main-1-pdf-for-ro-sarpanch-final",
  "title": "रिटर्निंग अधिकारियों (RO) का प्रशिक्षण"
 },
 {
  "id": "panch-main-2-pdf-for-po-sarpanch-final",
  "title": "मतदान अधिकारियों (PO) का प्रशिक्षण"
 },
 {
  "id": "panch-material-material-3-2026",
  "title": "सरपंच-पंच पद के लिए पात्रता (धारा 19)"
 },
 {
  "id": "panch-main-main-4-2026",
  "title": "भरे हुए प्रपत्र, पंचायत चुनाव 2026"
 },
 {
  "id": "panch-material-7-counting-panch-sarpanch",
  "title": "मतगणना (सरपंच-पंच)"
 },
 {
  "id": "panch-material-material-7-8",
  "title": "परिणाम की विवरणी (प्ररूप-7) और निर्वाचन का प्रमाण-पत्र (प्ररूप-8), भरे हुए"
 }
]

/** Files at or above this size get a "बड़ी फ़ाइल" badge. */
export const BIG_FILE_BYTES = 8000000

export const DOCUMENTS: DocItem[] = [
 {
  "id": "ps-training-1-ppt-for-polling-party",
  "number": "1",
  "title": "PPT For Polling Party",
  "originalFileName": "1- PPT For Polling Party.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 104,
  "fileSize": 13067764,
  "keywords": "मतदान दल polling party",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/1-ppt-for-polling-party.pdf",
  "thumbnailUrl": "/thumbs/00af8511101b.jpg"
 },
 {
  "id": "ps-training-2-ppt-for-ro-latest",
  "number": "2",
  "title": "PPT FOR RO-latest",
  "originalFileName": "2-PPT FOR RO-latest.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 144,
  "fileSize": 20742724,
  "keywords": "ro रिटर्निंग अधिकारी",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/2-ppt-for-ro-latest.pdf",
  "thumbnailUrl": "/thumbs/c23ff7dead89.jpg"
 },
 {
  "id": "ps-training-3-counting-m-3-evm-zp-ps-2026",
  "number": "3",
  "title": "COUNTING M-3 EVM Zp Ps 2026",
  "originalFileName": "3- COUNTING M-3 EVM Zp Ps 2026.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 77,
  "fileSize": 10151245,
  "keywords": "मतगणना गिनती counting evm मशीन mpsv m3",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/3-counting-m-3-evm-zp-ps-2026.pdf",
  "thumbnailUrl": "/thumbs/947a42925383.jpg"
 },
 {
  "id": "ps-training-3-a-counting-mpsv-mpmv-evm-zp-ps",
  "number": "3 A",
  "title": "Counting MPSV MPMV EVM ZP PS",
  "originalFileName": "3 A Counting MPSV MPMV EVM ZP PS.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 85,
  "fileSize": 12146458,
  "keywords": "मतगणना गिनती counting evm मशीन mpsv m3",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/3-a-counting-mpsv-mpmv-evm-zp-ps.pdf",
  "thumbnailUrl": "/thumbs/bedf200c0abf.jpg"
 },
 {
  "id": "ps-training-6-ppt-for-sector-megistrait",
  "number": "6",
  "title": "PPT FOR SECTOR MEGISTRAIT",
  "originalFileName": "6-PPT FOR SECTOR MEGISTRAIT.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 93,
  "fileSize": 9423718,
  "keywords": "सेक्टर मजिस्ट्रेट sector magistrate",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/6-ppt-for-sector-megistrait.pdf",
  "thumbnailUrl": "/thumbs/3141b2801893.jpg"
 },
 {
  "id": "ps-training-7-postal-ballot",
  "number": "7",
  "title": "Postal Ballot",
  "originalFileName": "7-Postal Ballot.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 27,
  "fileSize": 3377788,
  "keywords": "डाक मतपत्र postal ballot मतपत्र ballot paper",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/7-postal-ballot.pdf",
  "thumbnailUrl": "/thumbs/bf20c1cce29f.jpg"
 },
 {
  "id": "ps-training-10-ppt-for-ro-for-chairperson",
  "number": "10",
  "title": "PPT FOR RO-For Chairperson",
  "originalFileName": "10-PPT FOR RO-For Chairperson.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 33,
  "fileSize": 3958551,
  "keywords": "प्रधान प्रमुख chairperson ro रिटर्निंग अधिकारी",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/10-ppt-for-ro-for-chairperson.pdf",
  "thumbnailUrl": "/thumbs/f5c6ea50e8bd.jpg"
 },
 {
  "id": "ps-training-training-11",
  "number": "11",
  "title": "आर्दश आचार संहिता",
  "originalFileName": "11-आर्दश आचार संहिता.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 53,
  "fileSize": 3340562,
  "keywords": "आदर्श आचार संहिता mcc model code",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/training-11.pdf",
  "thumbnailUrl": "/thumbs/6809d6ea8506.jpg"
 },
 {
  "id": "ps-training-12-zonal-officer-observer-training",
  "number": "12",
  "title": "Zonal OFFICER & Observer TRAINING",
  "originalFileName": "12-Zonal OFFICER & Observer  TRAINING.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 37,
  "fileSize": 1420477,
  "keywords": "जोनल ऑफिसर प्रेक्षक zonal observer",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/12-zonal-officer-observer-training.pdf",
  "thumbnailUrl": "/thumbs/5f03ca89b035.jpg"
 },
 {
  "id": "ps-training-13-ppt-for-ro-for-sdm-dm",
  "number": "13",
  "title": "PPT FOR RO-For SDM DM",
  "originalFileName": "13-PPT FOR RO-For SDM DM.pdf",
  "election": "zp-ps",
  "group": "ps/training",
  "documentType": "train",
  "section": "train",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 186,
  "fileSize": 23463151,
  "keywords": "sdm dm कलेक्टर ro रिटर्निंग अधिकारी",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/training/13-ppt-for-ro-for-sdm-dm.pdf",
  "thumbnailUrl": "/thumbs/b486b6db9d28.jpg"
 },
 {
  "id": "ps-filled-forms-1-zp-ps-for-candidate-2026",
  "number": "1",
  "title": "भरे हुए प्रपत्र (ZP PS) For Candidate 2026",
  "originalFileName": "1-भरे हुए प्रपत्र (ZP PS)  For Candidate 2026.pdf",
  "election": "zp-ps",
  "group": "ps/filled-forms",
  "documentType": "forms",
  "section": "forms",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 16,
  "fileSize": 1013682,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/filled-forms/1-zp-ps-for-candidate-2026.pdf",
  "thumbnailUrl": "/thumbs/b3eff0662e6c.jpg"
 },
 {
  "id": "ps-filled-forms-2-zp-ps-for-polling-party",
  "number": "2",
  "title": "भरे हुए प्रपत्र (ZP PS) For Polling Party",
  "originalFileName": "2-भरे हुए प्रपत्र (ZP PS) For Polling Party.pdf",
  "election": "zp-ps",
  "group": "ps/filled-forms",
  "documentType": "forms",
  "section": "forms",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 22,
  "fileSize": 670340,
  "keywords": "मतदान दल polling party",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/filled-forms/2-zp-ps-for-polling-party.pdf",
  "thumbnailUrl": "/thumbs/10bf05501a3b.jpg"
 },
 {
  "id": "ps-checklist-1-1-check-list-at-the-time-of-nomination-in-zs-ps-election",
  "number": "1-1",
  "title": "Check List At The Time Of Nomination In ZS PS Election",
  "originalFileName": "1-1-Check List At The Time Of Nomination In ZS PS Election.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 11,
  "fileSize": 788174,
  "keywords": "नामांकन नाम निर्देशन nomination",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/1-1-check-list-at-the-time-of-nomination-in-zs-ps-election.pdf",
  "thumbnailUrl": "/thumbs/c584b0bdb38b.jpg"
 },
 {
  "id": "ps-checklist-2-2-check-list-qualification-disqualification",
  "number": "2.2",
  "title": "Check List Qualification-DisQualification",
  "originalFileName": "2.2 -Check List Qualification-DisQualification.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 5,
  "fileSize": 674631,
  "keywords": "पात्रता योग्यता अयोग्यता qualification disqualification",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/2-2-check-list-qualification-disqualification.pdf",
  "thumbnailUrl": "/thumbs/bf94f0e69bac.jpg"
 },
 {
  "id": "ps-checklist-3-3-check-list-at-the-time-of-scrutiny",
  "number": "3.3",
  "title": "Check List At The Time Of SCRUTINY",
  "originalFileName": "3.3- Check List At The Time Of SCRUTINY.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 5,
  "fileSize": 681784,
  "keywords": "संवीक्षा जांच scrutiny",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/3-3-check-list-at-the-time-of-scrutiny.pdf",
  "thumbnailUrl": "/thumbs/8fcc52e3d147.jpg"
 },
 {
  "id": "ps-checklist-4-4-check-list-at-the-time-withdrawal",
  "number": "4.4",
  "title": "Check List At The Time WITHDRAWAL",
  "originalFileName": "4.4- Check List At The Time WITHDRAWAL.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 2,
  "fileSize": 634260,
  "keywords": "नाम वापसी withdrawal",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/4-4-check-list-at-the-time-withdrawal.pdf",
  "thumbnailUrl": "/thumbs/a6e27e1b80e0.jpg"
 },
 {
  "id": "ps-checklist-5-5-check-list-at-the-time-of-allotment-of-symbols",
  "number": "5.5",
  "title": "Check List At The Time Of ALLOTMENT OF SYMBOLS",
  "originalFileName": "5.5-Check List At The Time Of  ALLOTMENT OF SYMBOLS.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 4,
  "fileSize": 677243,
  "keywords": "चुनाव चिह्न चिन्ह निशान symbol",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/5-5-check-list-at-the-time-of-allotment-of-symbols.pdf",
  "thumbnailUrl": "/thumbs/d6c9a59ab4e0.jpg"
 },
 {
  "id": "ps-checklist-checklist-at-nomination-of-zp-ps",
  "title": "Checklist At Nomination Of ZP PS",
  "originalFileName": "Checklist At Nomination Of ZP PS.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 5,
  "fileSize": 1077667,
  "keywords": "नामांकन नाम निर्देशन nomination",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/checklist-at-nomination-of-zp-ps.pdf",
  "thumbnailUrl": "/thumbs/68c888a284e0.jpg"
 },
 {
  "id": "ps-checklist-ro-nomination-scrutiny-register",
  "title": "RO NOMINATION SCRUTINY REGISTER पंचायत समिति सदस्य जिला परिषद् सदस्य",
  "originalFileName": "RO NOMINATION SCRUTINY REGISTER  पंचायत समिति सदस्य  जिला परिषद् सदस्य.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 4,
  "fileSize": 853988,
  "keywords": "नामांकन नाम निर्देशन nomination संवीक्षा जांच scrutiny ro रिटर्निंग अधिकारी रजिस्टर register",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/ro-nomination-scrutiny-register.pdf",
  "thumbnailUrl": "/thumbs/0f9134f96392.jpg"
 },
 {
  "id": "ps-checklist-checklist-2026",
  "title": "प्रश्नावली राजस्थान पंचायती राज चुनाव 2026",
  "originalFileName": "प्रश्नावली  राजस्थान पंचायती राज चुनाव 2026.pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 11,
  "fileSize": 885783,
  "keywords": "प्रश्नावली प्रश्न उत्तर सवाल जवाब quiz",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/checklist-2026.pdf",
  "thumbnailUrl": "/thumbs/1b9f636646f7.jpg"
 },
 {
  "id": "ps-checklist-checklist",
  "title": "मेमो",
  "originalFileName": "मेमो .pdf",
  "election": "zp-ps",
  "group": "ps/checklist",
  "documentType": "check",
  "section": "check",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 5,
  "fileSize": 843354,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/checklist/checklist.pdf",
  "thumbnailUrl": "/thumbs/37cf6a87a565.jpg"
 },
 {
  "id": "ps-documents-envelopes-zp-ps",
  "title": "नाम निर्देषन पत्र ZP PS के साथ प्रस्तुत किये जाने वाले दस्तावेज",
  "originalFileName": "नाम निर्देषन पत्र ZP PS के साथ प्रस्तुत किये जाने वाले दस्तावेज.pdf",
  "election": "zp-ps",
  "group": "ps/documents-envelopes",
  "documentType": "docs",
  "section": "docs",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 2,
  "fileSize": 641049,
  "keywords": "नामांकन नाम निर्देशन nomination",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/documents-envelopes/zp-ps.pdf",
  "thumbnailUrl": "/thumbs/061afafffceb.jpg"
 },
 {
  "id": "ps-documents-envelopes-documents-envelopes-2026",
  "title": "लिफाफे पंचायत समिति एवं जिला परिषद् चुनाव 2026",
  "originalFileName": "लिफाफे पंचायत समिति एवं जिला परिषद् चुनाव 2026.pdf",
  "election": "zp-ps",
  "group": "ps/documents-envelopes",
  "documentType": "docs",
  "section": "docs",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 3,
  "fileSize": 532609,
  "keywords": "लिफ़ाफ़े लिफाफा envelope",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/documents-envelopes/documents-envelopes-2026.pdf",
  "thumbnailUrl": "/thumbs/2d54abeb8370.jpg"
 },
 {
  "id": "ps-main-order-nomination-amendment",
  "title": "(AMENDMENT",
  "originalFileName": "(AMENDMENT.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/nomination",
  "documentType": "order",
  "section": "o-nom",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 220279,
  "keywords": "संशोधन amendment",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/nomination/amendment.pdf",
  "thumbnailUrl": "/thumbs/f754c3125b61.jpg"
 },
 {
  "id": "ps-main-order-nomination-153-for-caste-certificate-pri-election",
  "title": "153 For Caste Certificate (PRI) Election",
  "originalFileName": "153 For Caste Certificate (PRI) Election.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/nomination",
  "documentType": "order",
  "section": "o-nom",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 2,
  "fileSize": 1058811,
  "keywords": "जाति प्रमाण पत्र caste certificate",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/nomination/153-for-caste-certificate-pri-election.pdf",
  "thumbnailUrl": "/thumbs/4947d160ca82.jpg"
 },
 {
  "id": "ps-main-order-nomination-for-use-of-mobile-near-polling-station",
  "title": "For Use Of Mobile Near Polling Station",
  "originalFileName": "For Use Of Mobile Near Polling Station.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/nomination",
  "documentType": "order",
  "section": "o-misc",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 576100,
  "keywords": "मोबाइल फोन mobile",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/nomination/for-use-of-mobile-near-polling-station.pdf",
  "thumbnailUrl": "/thumbs/adbda330ed02.jpg"
 },
 {
  "id": "ps-main-order-nomination-letter-for-maximum-expenditure-in-pri-election-2026",
  "title": "Letter For Maximum Expenditure In PRI Election 2026",
  "originalFileName": "Letter For Maximum Expenditure In PRI Election 2026.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/nomination",
  "documentType": "order",
  "section": "o-mcc",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 7,
  "fileSize": 1631824,
  "keywords": "चुनाव खर्च व्यय expenditure",
  "duplicates": [
   "ps-main-order-mcc-letter-for-maximum-expenditure-in-pri-election-2026"
  ],
  "available": true,
  "fileUrl": "/documents/ps/main-order/nomination/letter-for-maximum-expenditure-in-pri-election-2026.pdf",
  "thumbnailUrl": "/thumbs/14e20b5e35a5.jpg"
 },
 {
  "id": "ps-main-order-nomination-nomination",
  "title": "प्रतिभूति निक्षेप",
  "originalFileName": "प्रतिभूति निक्षेप.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/nomination",
  "documentType": "order",
  "section": "o-nom",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 1,
  "fileSize": 393016,
  "keywords": "प्रतिभूति निक्षेप जमानत राशि security deposit",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/nomination/nomination.pdf",
  "thumbnailUrl": "/thumbs/4e365a76d586.jpg"
 },
 {
  "id": "ps-main-order-nomination-nomination-2",
  "title": "प्रारूप क व प्रारूप ख",
  "originalFileName": "प्रारूप क व प्रारूप ख.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/nomination",
  "documentType": "order",
  "section": "o-sym",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 9,
  "fileSize": 1372808,
  "keywords": "प्रारूप फॉर्म format",
  "duplicates": [
   "ps-circular-20-symbol-allotment-4196r"
  ],
  "available": true,
  "fileUrl": "/documents/ps/main-order/nomination/nomination-2.pdf",
  "thumbnailUrl": "/thumbs/af825933a0b6.jpg"
 },
 {
  "id": "ps-main-order-symbol-allotment-zp-ps",
  "title": "ZP & PS मतपत्र का प्रारूप",
  "originalFileName": "ZP & PS मतपत्र का प्रारूप.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/symbol-allotment",
  "documentType": "order",
  "section": "o-sym",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 7,
  "fileSize": 1341909,
  "keywords": "मतपत्र ballot paper प्रारूप फॉर्म format",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/symbol-allotment/zp-ps.pdf",
  "thumbnailUrl": "/thumbs/87ce242bf7d7.jpg"
 },
 {
  "id": "ps-main-order-symbol-allotment-free-symbol",
  "title": "पंचायतीराज संस्थाओं के चुनाव में प्रयुक्त होने वाले आरक्षित & Free Symbol",
  "originalFileName": "पंचायतीराज संस्थाओं के चुनाव में प्रयुक्त होने वाले आरक्षित & Free Symbol.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/symbol-allotment",
  "documentType": "order",
  "section": "o-sym",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 22,
  "fileSize": 544729,
  "keywords": "चुनाव चिह्न चिन्ह निशान symbol",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/symbol-allotment/free-symbol.pdf",
  "thumbnailUrl": "/thumbs/6af3a2ca7659.jpg"
 },
 {
  "id": "ps-main-order-counting-1299-counting-in-zp-ps-election",
  "title": "1299 Counting In Zp Ps Election",
  "originalFileName": "1299 Counting In Zp Ps Election.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/counting",
  "documentType": "order",
  "section": "o-count",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 14,
  "fileSize": 4530972,
  "keywords": "मतगणना गिनती counting",
  "duplicates": [
   "ps-circular-8-evm",
   "panch-circular-8-evm"
  ],
  "available": true,
  "fileUrl": "/documents/ps/main-order/counting/1299-counting-in-zp-ps-election.pdf",
  "thumbnailUrl": "/thumbs/5bfa27402979.jpg"
 },
 {
  "id": "ps-main-order-mcc-letter-for-maximum-expenditure-in-pri-election-2026",
  "title": "Letter For Maximum Expenditure In PRI Election 2026",
  "originalFileName": "Letter For Maximum Expenditure In PRI Election 2026.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/mcc",
  "documentType": "order",
  "section": "o-mcc",
  "pages": [],
  "usefulForBoth": true,
  "pageCount": 7,
  "fileSize": 1631824,
  "keywords": "चुनाव खर्च व्यय expenditure",
  "duplicates": [
   "ps-main-order-nomination-letter-for-maximum-expenditure-in-pri-election-2026"
  ],
  "available": true,
  "fileUrl": "/documents/ps/main-order/mcc/letter-for-maximum-expenditure-in-pri-election-2026.pdf",
  "thumbnailUrl": "/thumbs/14e20b5e35a5.jpg"
 },
 {
  "id": "ps-main-order-mcc-mcc",
  "title": "आदर्श आचरण संहिता अधिकतम चुनाव खर्च सीमा एवं इस आदेश का उल्लंघन",
  "originalFileName": "आदर्श आचरण संहिता अधिकतम चुनाव खर्च सीमा एवं इस आदेश का उल्लंघन.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/mcc",
  "documentType": "order",
  "section": "o-mcc",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 5,
  "fileSize": 308258,
  "keywords": "आदर्श आचार संहिता mcc model code",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/mcc/mcc.pdf",
  "thumbnailUrl": "/thumbs/a9d108600c71.jpg"
 },
 {
  "id": "ps-main-order-misc-misc-1",
  "number": "1",
  "title": "प्रशासक संबधि आदेश",
  "originalFileName": "1-प्रशासक संबधि आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/misc",
  "documentType": "order",
  "section": "o-misc",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 2,
  "fileSize": 322431,
  "keywords": "प्रशासक त्यागपत्र इस्तीफा",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/misc/misc-1.pdf",
  "thumbnailUrl": "/thumbs/fbcadb69d28e.jpg"
 },
 {
  "id": "ps-main-order-misc-misc-2",
  "number": "2",
  "title": "प्रशासक संबधि त्यागपत्र आदेश",
  "originalFileName": "2-प्रशासक संबधि  त्यागपत्र आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/misc",
  "documentType": "order",
  "section": "o-misc",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 1,
  "fileSize": 129820,
  "keywords": "प्रशासक त्यागपत्र इस्तीफा",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/misc/misc-2.pdf",
  "thumbnailUrl": "/thumbs/8b2f878c60b6.jpg"
 },
 {
  "id": "ps-main-order-misc-3-zp-ps",
  "number": "3",
  "title": "दस्तावेज संबधि आदेश ZP PS",
  "originalFileName": "3-दस्तावेज संबधि आदेश ZP  PS.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/misc",
  "documentType": "order",
  "section": "o-nom",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": false,
  "pageCount": 3,
  "fileSize": 597554,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/misc/3-zp-ps.pdf",
  "thumbnailUrl": "/thumbs/86c7406fe278.jpg"
 },
 {
  "id": "ps-main-order-misc-4-sapanch",
  "number": "4",
  "title": "दस्तावेज संबधि आदेश Sapanch",
  "originalFileName": "4-दस्तावेज संबधि आदेश Sapanch.pdf",
  "election": "zp-ps",
  "group": "ps/main-order/misc",
  "documentType": "order",
  "section": "o-nom",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 3,
  "fileSize": 591770,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/main-order/misc/4-sapanch.pdf",
  "thumbnailUrl": "/thumbs/42ad0a6802e5.jpg"
 },
 {
  "id": "ps-circular-circular-1",
  "number": "1",
  "title": "डाक मत पत्रों की मतगणना",
  "originalFileName": "1-डाक मत पत्रों की मतगणना.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 119274,
  "keywords": "मतगणना गिनती counting डाक मतपत्र postal ballot मतपत्र ballot paper",
  "duplicates": [
   "panch-circular-circular-1"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-1.pdf",
  "thumbnailUrl": "/thumbs/6edf6b6d40df.jpg"
 },
 {
  "id": "ps-circular-circular-2",
  "number": "2",
  "title": "नगरपालिका में जेल में बंद डाक मत पत्र",
  "originalFileName": "2-नगरपालिका में जेल में बंद डाक मत पत्र.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 5,
  "fileSize": 448229,
  "keywords": "डाक मतपत्र postal ballot मतपत्र ballot paper",
  "duplicates": [
   "panch-circular-circular-2"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-2.pdf",
  "thumbnailUrl": "/thumbs/f3baa5008d49.jpg"
 },
 {
  "id": "ps-circular-circular-3",
  "number": "3",
  "title": "अमिट स्याही संबधि आदेश",
  "originalFileName": "3-अमिट स्याही संबधि आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 683780,
  "keywords": "अमिट स्याही ink",
  "duplicates": [
   "panch-circular-circular-3"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-3.pdf",
  "thumbnailUrl": "/thumbs/0c2c66109840.jpg"
 },
 {
  "id": "ps-circular-circular-4-21-22-23",
  "number": "4",
  "title": "मतगणना प्रारूप 21,22,23",
  "originalFileName": "4-मतगणना प्रारूप 21,22,23.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 305828,
  "keywords": "मतगणना गिनती counting प्रारूप फॉर्म format",
  "duplicates": [
   "panch-circular-circular-4-21-22-23"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-4-21-22-23.pdf",
  "thumbnailUrl": "/thumbs/0a43fa108e6c.jpg"
 },
 {
  "id": "ps-circular-circular-5",
  "number": "5",
  "title": "मतपत्रों के प्रारूप नगरपालिका चुनाव",
  "originalFileName": "5-मतपत्रों के प्रारूप नगरपालिका चुनाव.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 410717,
  "keywords": "मतपत्र ballot paper प्रारूप फॉर्म format",
  "duplicates": [
   "panch-circular-circular-5"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-5.pdf",
  "thumbnailUrl": "/thumbs/5931f6a2ea28.jpg"
 },
 {
  "id": "ps-circular-circular-6",
  "number": "6",
  "title": "मतपत्रों के प्रारूप",
  "originalFileName": "6-मतपत्रों के प्रारूप.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 61221,
  "keywords": "मतपत्र ballot paper प्रारूप फॉर्म format",
  "duplicates": [
   "panch-circular-circular-6"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-6.pdf",
  "thumbnailUrl": "/thumbs/274fcb582205.jpg"
 },
 {
  "id": "ps-circular-circular-7",
  "number": "7",
  "title": "मतगणना सरपंच के चुनाव हो",
  "originalFileName": "7-मतगणना सरपंच के चुनाव  हो.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 513940,
  "keywords": "मतगणना गिनती counting",
  "duplicates": [
   "panch-circular-circular-7"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-7.pdf",
  "thumbnailUrl": "/thumbs/11c4bc422c8d.jpg"
 },
 {
  "id": "ps-circular-8-evm",
  "number": "8",
  "title": "मतगणना जब EVM प्रयुक्त हो",
  "originalFileName": "8-मतगणना जब EVM प्रयुक्त हो.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [],
  "usefulForBoth": true,
  "pageCount": 14,
  "fileSize": 4530972,
  "keywords": "मतगणना गिनती counting evm मशीन mpsv m3",
  "duplicates": [
   "ps-main-order-counting-1299-counting-in-zp-ps-election",
   "panch-circular-8-evm"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/8-evm.pdf",
  "thumbnailUrl": "/thumbs/5bfa27402979.jpg"
 },
 {
  "id": "ps-circular-circular-9",
  "number": "9",
  "title": "नगरीय चुनाव में मॉक-पोल संबधि आदेश",
  "originalFileName": "9-नगरीय चुनाव में मॉक-पोल संबधि आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 226190,
  "keywords": "मॉक पोल mock poll",
  "duplicates": [
   "panch-circular-circular-9"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-9.pdf",
  "thumbnailUrl": "/thumbs/0075d122f910.jpg"
 },
 {
  "id": "ps-circular-10-evm",
  "number": "10",
  "title": "पंचायतीराज चुनाव में EVM में मॉक-पोल संबधि आदेश",
  "originalFileName": "10-पंचायतीराज चुनाव में EVM में मॉक-पोल संबधि आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 788425,
  "keywords": "मॉक पोल mock poll evm मशीन mpsv m3",
  "duplicates": [
   "ps-circular-circular-11",
   "panch-circular-circular-11",
   "panch-circular-10-evm"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/10-evm.pdf",
  "thumbnailUrl": "/thumbs/87d485a627f7.jpg"
 },
 {
  "id": "ps-circular-circular-11",
  "number": "11",
  "title": "पंचायतीराज चुनाव में मॉक-पोल संबधि आदेश",
  "originalFileName": "11-पंचायतीराज चुनाव में मॉक-पोल संबधि आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 788425,
  "keywords": "मॉक पोल mock poll",
  "duplicates": [
   "ps-circular-10-evm",
   "panch-circular-circular-11",
   "panch-circular-10-evm"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-11.pdf",
  "thumbnailUrl": "/thumbs/87d485a627f7.jpg"
 },
 {
  "id": "ps-circular-circular-12",
  "number": "12",
  "title": "डाक मत के आदेश",
  "originalFileName": "12-डाक मत  के आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 12,
  "fileSize": 2727227,
  "keywords": "डाक मतपत्र postal ballot",
  "duplicates": [
   "panch-circular-circular-12"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-12.pdf",
  "thumbnailUrl": "/thumbs/f5394250a216.jpg"
 },
 {
  "id": "ps-circular-13-evm",
  "number": "13",
  "title": "EVM तथा निविदत्त मतों के मुद्रण के आदेश",
  "originalFileName": "13-EVM तथा निविदत्त मतों के मुद्रण के आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 29,
  "fileSize": 3389507,
  "keywords": "evm मशीन mpsv m3",
  "duplicates": [
   "panch-circular-13-evm"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/13-evm.pdf",
  "thumbnailUrl": "/thumbs/b6f9b3fed813.jpg"
 },
 {
  "id": "ps-circular-circular-14",
  "number": "14",
  "title": "मतपत्रों के अधिप्रमाणन के आदेश",
  "originalFileName": "14-मतपत्रों के अधिप्रमाणन के आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 671502,
  "keywords": "मतपत्र ballot paper",
  "duplicates": [
   "panch-circular-circular-14"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-14.pdf",
  "thumbnailUrl": "/thumbs/5aa640aa6ce9.jpg"
 },
 {
  "id": "ps-circular-circular-15",
  "number": "15",
  "title": "पहचान के दस्तावेज के आदेश",
  "originalFileName": "15-पहचान के दस्तावेज के आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 470888,
  "keywords": "पहचान पत्र identity id",
  "duplicates": [
   "panch-circular-circular-15"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-15.pdf",
  "thumbnailUrl": "/thumbs/81e326620bf1.jpg"
 },
 {
  "id": "ps-circular-circular-16",
  "number": "16",
  "title": "प्रतिभूति निक्षेप राशी को जमा कराने के आदेश",
  "originalFileName": "16-प्रतिभूति निक्षेप राशी को जमा कराने के आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 458740,
  "keywords": "प्रतिभूति निक्षेप जमानत राशि security deposit",
  "duplicates": [
   "panch-circular-circular-16"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-16.pdf",
  "thumbnailUrl": "/thumbs/40b781f8f45b.jpg"
 },
 {
  "id": "ps-circular-16-a-format",
  "number": "16 A",
  "title": "प्रतिभूति निक्षेप राशी को जमा कराने के Format",
  "originalFileName": "16 A -प्रतिभूति निक्षेप राशी को जमा कराने के Format.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 6,
  "fileSize": 839415,
  "keywords": "प्रतिभूति निक्षेप जमानत राशि security deposit प्रारूप फॉर्म format",
  "duplicates": [
   "panch-circular-16-a-format"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/16-a-format.pdf",
  "thumbnailUrl": "/thumbs/5e83d73ad034.jpg"
 },
 {
  "id": "ps-circular-17-mpsv",
  "number": "17",
  "title": "MPSV मशीन से संबधित आदेश",
  "originalFileName": "17-MPSV मशीन से संबधित आदेश.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 18,
  "fileSize": 6275757,
  "keywords": "evm मशीन mpsv m3",
  "duplicates": [
   "panch-circular-17-mpsv"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/17-mpsv.pdf",
  "thumbnailUrl": "/thumbs/c29e03ecf196.jpg"
 },
 {
  "id": "ps-circular-circular-18",
  "number": "18",
  "title": "नाम निर्देषन पत्र के साथ प्रस्तुत किये जाने वाले दस्तावेज",
  "originalFileName": "18-नाम निर्देषन पत्र के साथ प्रस्तुत किये जाने वाले दस्तावेज.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 809540,
  "keywords": "नामांकन नाम निर्देशन nomination",
  "duplicates": [
   "panch-circular-circular-18"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/circular-18.pdf",
  "thumbnailUrl": "/thumbs/c87fc507ecf5.jpg"
 },
 {
  "id": "ps-circular-19-office-of-profit",
  "number": "19",
  "title": "Office Of Profit",
  "originalFileName": "19- Office Of Profit.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 331274,
  "keywords": "लाभ का पद office of profit",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/circular/19-office-of-profit.pdf",
  "thumbnailUrl": "/thumbs/b290fe640f30.jpg"
 },
 {
  "id": "ps-circular-20-symbol-allotment-4196r",
  "number": "20",
  "title": "Symbol Allotment 4196r",
  "originalFileName": "20-Symbol Allotment 4196r.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [],
  "usefulForBoth": false,
  "pageCount": 9,
  "fileSize": 1372808,
  "keywords": "चुनाव चिह्न चिन्ह निशान symbol",
  "duplicates": [
   "ps-main-order-nomination-nomination-2"
  ],
  "available": true,
  "fileUrl": "/documents/ps/circular/20-symbol-allotment-4196r.pdf",
  "thumbnailUrl": "/thumbs/af825933a0b6.jpg"
 },
 {
  "id": "ps-circular-21-important-letter-for-pri-election-with-link",
  "number": "21",
  "title": "Important Letter For PRI Election With Link",
  "originalFileName": "21-Important Letter For PRI Election With Link.pdf",
  "election": "zp-ps",
  "group": "ps/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "zp-ps",
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 576321,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/ps/circular/21-important-letter-for-pri-election-with-link.pdf",
  "thumbnailUrl": "/thumbs/90058b4a1a74.jpg"
 },
 {
  "id": "panch-main-1-pdf-for-ro-sarpanch-final",
  "number": "1",
  "title": "PDF FOR RO-Sarpanch final",
  "originalFileName": "1-PDF FOR RO-Sarpanch final.pdf",
  "election": "sarpanch-panch",
  "group": "panch/main",
  "documentType": "train",
  "section": "train",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 130,
  "fileSize": 10530924,
  "keywords": "ro रिटर्निंग अधिकारी",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/main/1-pdf-for-ro-sarpanch-final.pdf",
  "thumbnailUrl": "/thumbs/37d470474593.jpg"
 },
 {
  "id": "panch-main-2-pdf-for-po-sarpanch-final",
  "number": "2",
  "title": "PDF FOR PO Sarpanch final",
  "originalFileName": "2-PDF FOR PO Sarpanch  final.pdf",
  "election": "sarpanch-panch",
  "group": "panch/main",
  "documentType": "train",
  "section": "train",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 72,
  "fileSize": 3304670,
  "keywords": "po पीठासीन अधिकारी",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/main/2-pdf-for-po-sarpanch-final.pdf",
  "thumbnailUrl": "/thumbs/e1a3c91ddca9.jpg"
 },
 {
  "id": "panch-main-3-important-for-panchyat-election",
  "number": "3",
  "title": "Important For Panchyat Election",
  "originalFileName": "3-Important For Panchyat Election.pdf",
  "election": "sarpanch-panch",
  "group": "panch/main",
  "documentType": "check",
  "section": "check",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 10,
  "fileSize": 750276,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/main/3-important-for-panchyat-election.pdf",
  "thumbnailUrl": "/thumbs/88bf7ab1c7f3.jpg"
 },
 {
  "id": "panch-main-main-4-2026",
  "number": "4",
  "title": "भरे हुए प्रपत्र पंचायत चुनाव 2026",
  "originalFileName": "4-भरे हुए प्रपत्र पंचायत चुनाव 2026.pdf",
  "election": "sarpanch-panch",
  "group": "panch/main",
  "documentType": "forms",
  "section": "forms",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 33,
  "fileSize": 1391504,
  "keywords": "",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/main/main-4-2026.pdf",
  "thumbnailUrl": "/thumbs/bf6f2b1aaedb.jpg"
 },
 {
  "id": "panch-material-material-3-2026",
  "number": "3",
  "title": "सरपंच - पंच पद के लिए पात्रता 2026",
  "originalFileName": "3-सरपंच - पंच पद के लिए पात्रता  2026.pdf",
  "election": "sarpanch-panch",
  "group": "panch/material",
  "documentType": "rules",
  "section": "rules",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 13,
  "fileSize": 4525153,
  "keywords": "पात्रता योग्यता अयोग्यता qualification disqualification",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/material/material-3-2026.pdf",
  "thumbnailUrl": "/thumbs/1512bc0d397e.jpg"
 },
 {
  "id": "panch-material-7-counting-panch-sarpanch",
  "number": "7",
  "title": "Counting Panch Sarpanch",
  "originalFileName": "7-Counting Panch Sarpanch.pdf",
  "election": "sarpanch-panch",
  "group": "panch/material",
  "documentType": "rules",
  "section": "rules",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 4,
  "fileSize": 496917,
  "keywords": "मतगणना गिनती counting",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/material/7-counting-panch-sarpanch.pdf",
  "thumbnailUrl": "/thumbs/a794a008dfff.jpg"
 },
 {
  "id": "panch-material-material-7-8",
  "title": "पंचायत परिणाम प्रारूप 7 एवं 8",
  "originalFileName": "पंचायत परिणाम प्रारूप 7 एवं 8.pdf",
  "election": "sarpanch-panch",
  "group": "panch/material",
  "documentType": "forms",
  "section": "forms",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 4,
  "fileSize": 244568,
  "keywords": "प्रारूप फॉर्म format परिणाम रिजल्ट result विवरणी निर्वाचन प्रमाण पत्र सर्टिफिकेट certificate प्ररूप 7 8",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/material/material-7-8.pdf",
  "thumbnailUrl": "/thumbs/6bce6fec0e82.jpg",
  "isNew": true
 },
 {
  "id": "panch-circular-circular-1",
  "number": "1",
  "title": "डाक मत पत्रों की मतगणना",
  "originalFileName": "1-डाक मत पत्रों की मतगणना.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 119274,
  "keywords": "मतगणना गिनती counting डाक मतपत्र postal ballot मतपत्र ballot paper",
  "duplicates": [
   "ps-circular-circular-1"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-1.pdf",
  "thumbnailUrl": "/thumbs/6edf6b6d40df.jpg"
 },
 {
  "id": "panch-circular-circular-2",
  "number": "2",
  "title": "नगरपालिका में जेल में बंद डाक मत पत्र",
  "originalFileName": "2-नगरपालिका में जेल में बंद डाक मत पत्र.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 5,
  "fileSize": 448229,
  "keywords": "डाक मतपत्र postal ballot मतपत्र ballot paper",
  "duplicates": [
   "ps-circular-circular-2"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-2.pdf",
  "thumbnailUrl": "/thumbs/f3baa5008d49.jpg"
 },
 {
  "id": "panch-circular-circular-3",
  "number": "3",
  "title": "अमिट स्याही संबधि आदेश",
  "originalFileName": "3-अमिट स्याही संबधि आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 683780,
  "keywords": "अमिट स्याही ink",
  "duplicates": [
   "ps-circular-circular-3"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-3.pdf",
  "thumbnailUrl": "/thumbs/0c2c66109840.jpg"
 },
 {
  "id": "panch-circular-circular-4-21-22-23",
  "number": "4",
  "title": "मतगणना प्रारूप 21,22,23",
  "originalFileName": "4-मतगणना प्रारूप 21,22,23.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 305828,
  "keywords": "मतगणना गिनती counting प्रारूप फॉर्म format",
  "duplicates": [
   "ps-circular-circular-4-21-22-23"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-4-21-22-23.pdf",
  "thumbnailUrl": "/thumbs/0a43fa108e6c.jpg"
 },
 {
  "id": "panch-circular-circular-5",
  "number": "5",
  "title": "मतपत्रों के प्रारूप नगरपालिका चुनाव",
  "originalFileName": "5-मतपत्रों के प्रारूप नगरपालिका चुनाव.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 4,
  "fileSize": 410717,
  "keywords": "मतपत्र ballot paper प्रारूप फॉर्म format",
  "duplicates": [
   "ps-circular-circular-5"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-5.pdf",
  "thumbnailUrl": "/thumbs/5931f6a2ea28.jpg"
 },
 {
  "id": "panch-circular-circular-6",
  "number": "6",
  "title": "मतपत्रों के प्रारूप",
  "originalFileName": "6-मतपत्रों के प्रारूप.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 61221,
  "keywords": "मतपत्र ballot paper प्रारूप फॉर्म format",
  "duplicates": [
   "ps-circular-circular-6"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-6.pdf",
  "thumbnailUrl": "/thumbs/274fcb582205.jpg"
 },
 {
  "id": "panch-circular-circular-7",
  "number": "7",
  "title": "मतगणना सरपंच के चुनाव हो",
  "originalFileName": "7-मतगणना सरपंच के चुनाव  हो.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 513940,
  "keywords": "मतगणना गिनती counting",
  "duplicates": [
   "ps-circular-circular-7"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-7.pdf",
  "thumbnailUrl": "/thumbs/11c4bc422c8d.jpg"
 },
 {
  "id": "panch-circular-8-evm",
  "number": "8",
  "title": "मतगणना जब EVM प्रयुक्त हो",
  "originalFileName": "8-मतगणना जब EVM प्रयुक्त हो.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 14,
  "fileSize": 4530972,
  "keywords": "मतगणना गिनती counting evm मशीन mpsv m3",
  "duplicates": [
   "ps-circular-8-evm",
   "ps-main-order-counting-1299-counting-in-zp-ps-election"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/8-evm.pdf",
  "thumbnailUrl": "/thumbs/5bfa27402979.jpg"
 },
 {
  "id": "panch-circular-circular-9",
  "number": "9",
  "title": "नगरीय चुनाव में मॉक-पोल संबधि आदेश",
  "originalFileName": "9-नगरीय चुनाव में मॉक-पोल संबधि आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 226190,
  "keywords": "मॉक पोल mock poll",
  "duplicates": [
   "ps-circular-circular-9"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-9.pdf",
  "thumbnailUrl": "/thumbs/0075d122f910.jpg"
 },
 {
  "id": "panch-circular-10-evm",
  "number": "10",
  "title": "पंचायतीराज चुनाव में EVM में मॉक-पोल संबधि आदेश",
  "originalFileName": "10-पंचायतीराज चुनाव में EVM में मॉक-पोल संबधि आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 788425,
  "keywords": "मॉक पोल mock poll evm मशीन mpsv m3",
  "duplicates": [
   "ps-circular-10-evm",
   "ps-circular-circular-11",
   "panch-circular-circular-11"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/10-evm.pdf",
  "thumbnailUrl": "/thumbs/87d485a627f7.jpg"
 },
 {
  "id": "panch-circular-circular-11",
  "number": "11",
  "title": "पंचायतीराज चुनाव में मॉक-पोल संबधि आदेश",
  "originalFileName": "11-पंचायतीराज चुनाव में मॉक-पोल संबधि आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [],
  "usefulForBoth": true,
  "pageCount": 3,
  "fileSize": 788425,
  "keywords": "मॉक पोल mock poll",
  "duplicates": [
   "ps-circular-10-evm",
   "ps-circular-circular-11",
   "panch-circular-10-evm"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-11.pdf",
  "thumbnailUrl": "/thumbs/87d485a627f7.jpg"
 },
 {
  "id": "panch-circular-circular-12",
  "number": "12",
  "title": "डाक मत के आदेश",
  "originalFileName": "12-डाक मत  के आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 12,
  "fileSize": 2727227,
  "keywords": "डाक मतपत्र postal ballot",
  "duplicates": [
   "ps-circular-circular-12"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-12.pdf",
  "thumbnailUrl": "/thumbs/f5394250a216.jpg"
 },
 {
  "id": "panch-circular-13-evm",
  "number": "13",
  "title": "EVM तथा निविदत्त मतों के मुद्रण के आदेश",
  "originalFileName": "13-EVM तथा निविदत्त मतों के मुद्रण के आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 29,
  "fileSize": 3389507,
  "keywords": "evm मशीन mpsv m3",
  "duplicates": [
   "ps-circular-13-evm"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/13-evm.pdf",
  "thumbnailUrl": "/thumbs/b6f9b3fed813.jpg"
 },
 {
  "id": "panch-circular-circular-14",
  "number": "14",
  "title": "मतपत्रों के अधिप्रमाणन के आदेश",
  "originalFileName": "14-मतपत्रों के अधिप्रमाणन के आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 671502,
  "keywords": "मतपत्र ballot paper",
  "duplicates": [
   "ps-circular-circular-14"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-14.pdf",
  "thumbnailUrl": "/thumbs/5aa640aa6ce9.jpg"
 },
 {
  "id": "panch-circular-circular-15",
  "number": "15",
  "title": "पहचान के दस्तावेज के आदेश",
  "originalFileName": "15-पहचान के दस्तावेज के आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 470888,
  "keywords": "पहचान पत्र identity id",
  "duplicates": [
   "ps-circular-circular-15"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-15.pdf",
  "thumbnailUrl": "/thumbs/81e326620bf1.jpg"
 },
 {
  "id": "panch-circular-circular-16",
  "number": "16",
  "title": "प्रतिभूति निक्षेप राशी को जमा कराने के आदेश",
  "originalFileName": "16-प्रतिभूति निक्षेप राशी को जमा कराने के आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 458740,
  "keywords": "प्रतिभूति निक्षेप जमानत राशि security deposit",
  "duplicates": [
   "ps-circular-circular-16"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-16.pdf",
  "thumbnailUrl": "/thumbs/40b781f8f45b.jpg"
 },
 {
  "id": "panch-circular-16-a-format",
  "number": "16 A",
  "title": "प्रतिभूति निक्षेप राशी को जमा कराने के Format",
  "originalFileName": "16 A -प्रतिभूति निक्षेप राशी को जमा कराने के Format.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 6,
  "fileSize": 839415,
  "keywords": "प्रतिभूति निक्षेप जमानत राशि security deposit प्रारूप फॉर्म format",
  "duplicates": [
   "ps-circular-16-a-format"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/16-a-format.pdf",
  "thumbnailUrl": "/thumbs/5e83d73ad034.jpg"
 },
 {
  "id": "panch-circular-17-mpsv",
  "number": "17",
  "title": "MPSV मशीन से संबधित आदेश",
  "originalFileName": "17-MPSV मशीन से संबधित आदेश.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 18,
  "fileSize": 6275757,
  "keywords": "evm मशीन mpsv m3",
  "duplicates": [
   "ps-circular-17-mpsv"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/17-mpsv.pdf",
  "thumbnailUrl": "/thumbs/c29e03ecf196.jpg"
 },
 {
  "id": "panch-circular-circular-18",
  "number": "18",
  "title": "नाम निर्देषन पत्र के साथ प्रस्तुत किये जाने वाले दस्तावेज",
  "originalFileName": "18-नाम निर्देषन पत्र के साथ प्रस्तुत किये जाने वाले दस्तावेज.pdf",
  "election": "sarpanch-panch",
  "group": "panch/circular",
  "documentType": "circ",
  "section": "circ",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": true,
  "pageCount": 2,
  "fileSize": 809540,
  "keywords": "नामांकन नाम निर्देशन nomination",
  "duplicates": [
   "ps-circular-circular-18"
  ],
  "available": true,
  "fileUrl": "/documents/panch/circular/circular-18.pdf",
  "thumbnailUrl": "/thumbs/c87fc507ecf5.jpg"
 },
 {
  "id": "panch-valid-invalid-valid-invalid-ballots",
  "title": "Valid-Invalid Ballots",
  "originalFileName": "Valid-Invalid Ballots.pdf",
  "election": "sarpanch-panch",
  "group": "panch/valid-invalid",
  "documentType": "ballot",
  "section": "ballot",
  "pages": [
   "sarpanch-panch"
  ],
  "usefulForBoth": false,
  "pageCount": 22,
  "fileSize": 1998786,
  "keywords": "मतपत्र ballot paper मान्य अमान्य valid invalid",
  "duplicates": [],
  "available": true,
  "fileUrl": "/documents/panch/valid-invalid/valid-invalid-ballots.pdf",
  "thumbnailUrl": "/thumbs/3a60ebc9f91c.jpg"
 }
]
