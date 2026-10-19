/**
 * English translation of the RO scrutiny guide (roGuide.generated.ts).
 *
 * Structure mirrors the Hindi source exactly: for every section, `parts` holds one English
 * HTML string per Hindi HTML part, in the same order (widgets are not counted). Markup,
 * class names, element ids and links are identical. Rule/Section/Form identifiers, case
 * names, letter numbers and page numbers are kept verbatim. The Hindi text remains the
 * source of truth; where the source itself is ambiguous, the translation keeps that
 * ambiguity rather than resolving it.
 */
import type { ChecklistGroup, FaqGroup } from './types'

export interface GuideSectionEn {
  title: string
  navLabel: string
  tags: string[]
  /** English HTML for each Hindi HTML part, in order. */
  parts: string[]
}

export const GUIDE_SECTIONS_EN: Record<string, GuideSectionEn> = {
  map: {
    title: 'Part 1: The most important legal provisions',
    navLabel: 'Legal provisions',
    tags: [],
    parts: [
      `<p>Which Section/Rule to look up for which subject, and on which page of the Manual it appears.</p>
<div class="tw"><table><thead><tr><th>Subject</th><th>Rule / Section</th><th>Manual page</th></tr></thead><tbody>
<tr><td>Electors and Electoral Roll</td><td><span class="rule">Section 18</span></td><td class="pg">58–60</td></tr>
<tr><td>Qualification / disqualification</td><td><span class="rule">Section 19</span></td><td class="pg">60–63</td></tr>
<tr><td>Special qualification</td><td><span class="rule">Section 19A</span></td><td class="pg">63</td></tr>
<tr><td>Election programme</td><td><span class="rule">Rule 58(1)</span></td><td class="pg">119</td></tr>
<tr><td>RO / ARO</td><td><span class="rule">Rule 58(2),(3),(4)</span></td><td class="pg">119</td></tr>
<tr><td>Nomination</td><td><span class="rule">Rule 58(5)</span></td><td class="pg">119–120</td></tr>
<tr><td>Scrutiny</td><td><span class="rule">Rule 27</span> + <span class="rule">58(5)</span></td><td class="pg">102; 120</td></tr>
<tr><td>Withdrawal</td><td><span class="rule">Rule 28</span> + <span class="rule">58(5)</span></td><td class="pg">103; 121</td></tr>
<tr><td>Final list of candidates</td><td><span class="rule">Rule 29</span> + <span class="rule">58(5)</span></td><td class="pg">103; 121–122</td></tr>
<tr><td>Election symbols</td><td><span class="rule">Rule 58(6)</span></td><td class="pg">120</td></tr>
<tr><td>Nomination form</td><td><span class="rule">Form IV-A</span></td><td class="pg">143*</td></tr>
<tr><td>Declaration</td><td><span class="rule">Form IV-D</span></td><td class="pg">148*</td></tr>
<tr><td>Final list</td><td><span class="rule">Form V</span></td><td class="pg">152*</td></tr>
</tbody></table></div>
<div class="note warn"><strong class="t">Note</strong><p>Because of Rule 58(5), the applicable provisions of Rule 24-A to Rule 54 apply mutatis mutandis to the PS/ZP member elections. So read not only Rule 58 but also <b>Rule 27 + Rule 28 + Rule 29</b> together with it.</p></div>`,
    ],
  },

  process: {
    title: 'The entire process at a glance',
    navLabel: 'Process',
    tags: ['Rule 58'],
    parts: [
      `<p>The sequence from the notification to an unopposed declaration or the poll.</p>
<div class="flow">
<div class="step"><div class="dot">1</div><div class="body"><b>Election notification</b><span>Programme: nomination, scrutiny, withdrawal, poll, counting</span></div></div>
<div class="step"><div class="dot">2</div><div class="body"><b>Receiving Form IV-A + Form IV-D</b><span>Record the nomination receipt, serial number, day and time</span></div></div>
<div class="step"><div class="dot">3</div><div class="body"><b>Party / independent check</b><span>The party's letter by 3:00 PM on the last day of nomination</span></div></div>
<div class="step"><div class="dot">4</div><div class="body"><b>Proposer check</b><span>Recognised party: 1 proposer. Others: 5 proposers. All must be electors of the same constituency</span></div></div>
<div class="step"><div class="dot">5</div><div class="body"><b>Security deposit</b><span>General ₹500. Women/SC/ST/OBC ₹250</span></div></div>
<div class="step"><div class="dot">6</div><div class="body"><b>Section 19 eligibility</b><span>Disqualifications, reservation, educational qualification (see note)</span></div></div>
<div class="step"><div class="dot">7</div><div class="body"><b>Scrutiny, Rule 27</b><span>Completed the same day. No adjournment. ACCEPTED / REJECTED on every paper</span></div></div>
<div class="step"><div class="dot">8</div><div class="body"><b>Withdrawal, Rule 28</b><span>In writing, two copies, by the fixed time. Once given, it cannot be taken back</span></div></div>
<div class="step"><div class="dot">9</div><div class="body"><b>Final list, Form V</b><span>Recognised parties first, then others. Hindi alphabetical order in both</span></div></div>
<div class="step"><div class="dot">10</div><div class="body"><b>Symbol allotment, Rule 58(6)</b><span>Lot / computerised random draw where the preference is the same</span></div></div>
<div class="step end"><div class="dot">✓</div><div class="body"><b>Only one candidate left?</b>
<div class="fork"><div class="y"><b>Yes</b><br>No poll. Declared elected unopposed</div><div class="n"><b>No</b><br>Publish the list and hold the poll</div></div></div></div>
</div>`,
    ],
  },

  programme: {
    title: 'Election programme and RO / ARO',
    navLabel: 'Programme & RO',
    tags: ['Rule 58(1)–(4)', 'Page 119'],
    parts: [
      `<h3>Rule 58(1): what the notification will contain</h3>
<p>The District Election Officer (Panchayats), by issuing a notification in accordance with the time-table fixed by the Commission, announces the programme for electing one member each from the Panchayat Samiti and Zila Parishad constituencies.</p>
<div class="tw"><table><thead><tr><th>Clause</th><th>Subject</th></tr></thead><tbody>
<tr><td><span class="rule">(a)</span></td><td>Date and time for presenting nomination papers</td></tr>
<tr><td><span class="rule">(b)</span></td><td>Date and time of scrutiny, on the day after the last date of nomination</td></tr>
<tr><td><span class="rule">(c)</span></td><td>Date and time of withdrawal, not later than the day after scrutiny</td></tr>
<tr><td><span class="rule">(d)</span></td><td>Date of poll, <b>at least 7 days after</b> the date of withdrawal, if a poll is necessary</td></tr>
<tr><td><span class="rule">(e)</span></td><td>Hours of poll</td></tr>
<tr><td><span class="rule">(f)</span></td><td>Place, day and time of counting</td></tr>
</tbody></table></div>
<div class="grid">
<div class="card"><h4>Panchayat Samiti member</h4><p><span class="rule">Rule 58(2)</span></p><p>The District Election Officer (Panchayats) appoints the RO and ARO for each Panchayat Samiti.</p></div>
<div class="card"><h4>Zila Parishad member</h4><p><span class="rule">Rule 58(3)</span></p><p>The <b>State Election Commission</b> appoints the RO and ARO for the election of Zila Parishad members.</p></div>
<div class="card"><h4>Duties of the RO / ARO</h4><p><span class="rule">Rule 58(4)</span></p><p>General duties as per <span class="rule">Rule 24</span>.</p></div>
</div>`,
    ],
  },

  nomination: {
    title: 'Rules of nomination',
    navLabel: 'Nomination',
    tags: ['Rule 58(5)', 'Page 119–120'],
    parts: [
      `<div class="grid">
<div class="card"><div class="big">₹500</div><h4>General candidate</h4><p>Security deposit, <span class="rule">58(5)(a)</span></p></div>
<div class="card"><div class="big">₹250</div><h4>Women / SC / ST / OBC</h4><p>Security deposit, <span class="rule">58(5)(a)</span></p></div>
<div class="card"><div class="big">1</div><h4>Candidate of a recognised party</h4><p>One proposer, an elector of the same constituency, <span class="rule">58(5)(e)</span></p></div>
<div class="card"><div class="big">5</div><h4>Other candidates</h4><p>Five proposers, all electors of the same constituency, <span class="rule">58(5)(f)</span></p></div>
</div>
<h3>Security deposit <span class="rule">58(5)(a)</span></h3>
<p>If the prescribed deposit has not been made, the candidate shall not be deemed to be duly nominated. The RO should check: the amount has been deposited, the amount is correct, there is a receipt/treasury record, and the candidate's category is correct.</p>
<h3>Status as an elector <span class="rule">58(5)(b)</span></h3>
<p>The candidate must be an elector of the same constituency. Having a name in any electoral roll in Rajasthan is not enough. Check whether he/she is an elector of the relevant Panchayat Samiti / Zila Parishad area.</p>
<h3>More than one nomination paper <span class="rule">58(5)(c)</span></h3>
<p>No second deposit. The prescribed deposit is sufficient for one candidate. In the matter of election symbols, <span class="rule">58(6)(c)</span> is separately important.</p>
<h3>Recognised party's letter <span class="rule">58(5)(e)</span></h3>
<p>For a candidate to be treated as a recognised party's candidate, the party's letter of authority is required. It must be received <b>by 3:00 PM on the last day of nomination</b>. It must be signed by the party president / head of the state unit or a person authorised by them. The party should have only one authorised candidate in the same constituency.</p>
<h3>One proposer, two candidates? <span class="rule">58(5)(g)</span></h3>
<p>An elector cannot be the proposer of more than one candidate. If this happens, only the nomination received first by the RO remains under consideration on this ground. All later nominations will be invalid. This provision is linked to the 2009 amendment. The deciding fact is which nomination the RO received first.</p>
<div class="tw"><table><thead><tr><th>Time</th><th>Candidate</th><th>Proposer</th><th>Result</th></tr></thead><tbody>
<tr><td class="pg">10:05</td><td>A</td><td>Ram</td><td><span class="pill yes">Valid on this ground</span></td></tr>
<tr><td class="pg">10:20</td><td>B</td><td>Ram</td><td><span class="pill no">Invalid</span></td></tr>
</tbody></table></div>
<h3>Nomination form <span class="rule">58(6)(d)</span></h3>
<p>The candidate submits the nomination in <b>Form IV-A + Form IV-D</b> and indicates the choice of election symbol. In the Manual's table of contents, Form IV-A is &ldquo;Nomination Paper (Election of Member of Panchayat Samiti / Member of Zila Parishad)&rdquo;.</p>`,
    ],
  },

  scrutiny: {
    title: 'Scrutiny',
    navLabel: 'Scrutiny',
    tags: ['Rule 27', 'Page 102'],
    parts: [
      `<p>Because of Rule 58(5), Rule 27 applies to the PS/ZP election. Candidates and other persons must be given a reasonable opportunity to examine the nomination papers and to object. The RO will examine each nomination paper separately.</p>
<h3>Rule 27(3): grounds for rejection</h3>
<div class="tw"><table><thead><tr><th>Clause</th><th>Ground</th></tr></thead><tbody>
<tr><td><span class="rule">(a)</span></td><td>The candidate is not qualified, or is disqualified</td></tr>
<tr><td><span class="rule">(b)</span></td><td>The candidate is not the same person whose name is in the electoral roll</td></tr>
<tr><td><span class="rule">(c)</span></td><td>The signature / thumb impression is not genuine, or was obtained by fraud / coercion / undue influence</td></tr>
<tr><td><span class="rule">(d)</span></td><td>The provisions of Rule 25 have not been complied with</td></tr>
</tbody></table></div>
<div class="grid">
<div class="card"><h4>Decision <span class="rule">27(4)</span></h4><p>Endorse <b>ACCEPTED</b> or <b>REJECTED</b> on every paper. On rejection, recording a brief reason is mandatory (page 102).</p></div>
<div class="card"><h4>Time limit <span class="rule">27(5)</span></h4><p>Scrutiny will be completed the same day. The proceedings shall not be adjourned.</p></div>
<div class="card"><h4>Attendance <span class="rule">27(2)</span></h4><p>At the time of examination the candidates themselves may be present, and no other person.</p></div>
</div>
<div class="note bad"><strong class="t">What not to write in the order</strong><p>Only &ldquo;Rejected&rdquo; is not enough. Write all three: Rule + Section + specific reason. Example: &ldquo;Nomination paper is rejected under Rule 27(3)(a) read with Section 19 because the candidate is disqualified under clause ____.&rdquo;</p></div>
<h3>Practical cases (from FAQ 51–60)</h3>
<ul>
<li>A minor spelling difference in the name, but identity is clear: not treated as a ground for rejection on that basis alone.</li>
<li>The candidate's required signature / thumb impression is missing altogether: a serious defect, a case for rejection.</li>
<li>No decision merely on an oral objection or on the objector's word. An independent decision on the basis of the nomination paper, the electoral roll, the documents and the law.</li>
<li>A separate decision should be endorsed on each nomination paper, not a collective order.</li>
</ul>`,
    ],
  },

  s19: {
    title: 'Section 19: Eligibility checklist',
    navLabel: 'Section 19',
    tags: ['Section 19', 'Page 60–63'],
    parts: [
      `<p>Basic rule: a person registered in the electoral roll is qualified to become a member of a Panchayati Raj institution unless a statutory disqualification applies. Search by clause, category or word.</p>
<div class="note warn"><strong class="t">Discrepancy in the source file — please verify against the original text</strong>
<p>In the source file's table, the &ldquo;RO Check&rdquo; cell for clauses <b>19(l)</b> (more than two children) and <b>19(r)</b> (educational qualification) is written in old-font characters which, when read, say &ldquo;currently removed&rdquo;. Yet Parts 20 and 21 are written treating these same two provisions as in force. For <b>19(l)</b>, the table is now correct: the Rajasthan Panchayati Raj (Amendment) Act, 2026 has deleted this clause (see the 19(l) card below). For <b>19(r)</b>, the two statements cannot both stand. Check the current gazetted text of the Act before using it in scrutiny.</p></div>`,
      `<h3>Section 19(gg): special care in criminal cases</h3>
<p>19(gg) does not apply merely because an FIR has been registered. Essential elements: (1) a case before a competent court; (2) the court has taken cognizance; (3) charges have been framed; (4) the offence is punishable with 5 years or more. The RO should verify cognizance and charge framing from the court's order, not from the FIR or the challan.</p>
<div class="ladder">
<div class="rung"><b>1. FIR</b><span>Only an FIR registered</span><span><span class="pill no">No disqualification</span> No rejection on an FIR</span></div>
<div class="rung"><b>2. Chargesheet</b><span>Police have filed a chargesheet</span><span><span class="pill no">Not automatically</span> No rejection on this alone</span></div>
<div class="rung"><b>3. Cognizance</b><span>A competent court has taken cognizance</span><span><span class="pill no">Not by itself</span> No rejection on cognizance alone</span></div>
<div class="rung"><b>4. Charge framed</b><span>For an offence punishable with 5 years or more</span><span><span class="pill mid">Look further</span> Check the under-trial status</span></div>
<div class="rung"><b>5. Trial</b><span>Accused is under trial after the charge</span><span><span class="pill yes">Yes</span> If the other conditions are met, a ground for rejection</span></div>
<div class="rung"><b>6. Conviction</b><span>Conviction after trial</span><span><span class="pill mid">Separate check</span> Separate provisions may apply</span></div>
<div class="rung"><b>7. Appeal</b><span>Appeal against the conviction</span><span><span class="pill mid">See the court's order</span> The status does not end merely because an &ldquo;appeal filed&rdquo;</span></div>
</div>
<p><b>19(g) vs 19(gg):</b> an FIR alone ≠ conviction, and a pending case alone ≠ 19(g). But if the elements of 19(gg) are met, it may apply separately. Note for the RO: &ldquo;The disqualification under Section 19(gg) is not established automatically merely by the registration of an FIR. The order of the concerned court should be seen to confirm cognizance by the Court, the framing of charges and the prescribed punishment for the offence.&rdquo;</p>
<div class="grid">
<div class="card"><h4>Educational qualification <span class="rule">19(r)</span></h4><p>For a PS/ZP member: passed the Secondary School Examination (Board of Secondary Education, Rajasthan or an equivalent board). Take the marksheet/certificate, the board's name, proof of passing, and the basis of equivalence. See the discrepancy note above.</p></div>
<div class="card"><h4>More than two children: no longer a disqualification <span class="rule">19(l)</span></h4><p>This clause has been deleted. The Rajasthan Panchayati Raj (Amendment) Act, 2026 (Act No. 6, notification 25.03.2026) has deleted clause (l) from Section 19, together with clause (iv) of the proviso and Explanation-I. The Act states that it comes into force immediately, and the Commission has said the same in letter no. 4795, dated 13.07.2026. So do not reject a nomination on the basis of the number of children. The exemptions linked to counting children (the 27 November 1995 one, the one for a child with a disability) also no longer need to be examined. <a href="/documents/notice/panchayati-raj-amendment-act-6-2026.pdf" target="_blank" rel="noopener noreferrer">See the Act and the Commission's letter (PDF)</a></p></div>
<div class="card"><h4>Reserved seat</h4><p><span class="rule">19(n)</span> On an SC/ST/BC seat, a member of that class. <span class="rule">19(o)</span> On a women's seat, a woman. <span class="rule">19(p)</span> On an SC/ST/BC women's seat, both the class and a woman.</p></div>
<div class="card"><h4>Special qualification <span class="rule">19A</span></h4><p>Page 63. If the State Government has fixed certain seats under 19A, an age condition of <b>21 to 35 years</b> may apply for that seat. Check against the seat notification.</p></div>
</div>`,
    ],
  },

  s38: {
    title: 'Section 38 and Section 19(h)',
    navLabel: 'Section 38',
    tags: ['Section 38(1),(3),(4)'],
    parts: [
      `<p>In scrutiny, read Section 38 with 19(h) to check the candidate's electoral eligibility, not for the &ldquo;Removal&rdquo; proceedings. Section 19 of the Act contains the disqualification that a person who is &ldquo;for the time being ineligible for election under Sec. 38&rdquo; is not qualified for election.</p>
<p>Section 38(3): a person removed under Section 38(1), or against whom findings were recorded under the proviso to Section 38, is not eligible to be elected for <b>5 years from the date of removal / findings</b>.</p>
<h3>The RO's 5-step test</h3>
<div class="flow">
<div class="step"><div class="dot">1</div><div class="body"><b>Obtain the order</b><span>Is the State Government's actual Section 38 order available?</span></div></div>
<div class="step"><div class="dot">2</div><div class="body"><b>Check the sub-section</b><span>38(1) removal → check further. 38(3) findings → check further. 38(4) suspension only → do not apply the 5-year disqualification automatically</span></div></div>
<div class="step"><div class="dot">3</div><div class="body"><b>Check the date</b><span>Count 5 years from the date of removal / findings</span></div></div>
<div class="step"><div class="dot">4</div><div class="body"><b>Apply 19(h)</b><span>If the 5-year period is running, Section 19(h) read with 38(3)</span></div></div>
<div class="step end"><div class="dot">5</div><div class="body"><b>Check later orders</b><span>If there is an appeal, revision, stay or set-aside order, decide its effect separately</span></div></div>
</div>
<h3>Three examples</h3>
<div class="grid">
<div class="card"><h4>Case 1: Shri A</h4><p>Former Sarpanch. Removed under Section 38(1) on 15.03.2023. 15.03.2023 + 5 years = 15.03.2028, so the period is not complete in 2026.</p><p><span class="pill no">Disqualified under 38(3) + 19(h)</span> if the order is in effect and there is no contrary court order.</p></div>
<div class="card"><h4>Case 2: Shri B</h4><p>Only suspended under Section 38(4), no 38(1) removal.</p><p><span class="pill yes">No 5-year disqualification</span> Do not apply 38(3) on the basis of suspension alone.</p></div>
<div class="card"><h4>Case 3: Shri C</h4><p>A 38(1) inquiry began, but he was not removed from office.</p><p><span class="pill yes">No automatic 5-year bar</span> There may separately be a 38(4) suspension.</p></div>
</div>
<div class="note warn"><strong class="t">Findings even after the term has ended</strong><p>If a 38(1) inquiry continues even after the term has ended, the Government may record findings, and the 5 years are counted from the date the findings are recorded. It is not necessary to assume &ldquo;the old term has ended, so the matter is over&rdquo;.</p></div>
<div class="note"><strong class="t">Basic principle</strong><p>The RO does not have to decide the entire Section 38 proceedings afresh. What must be seen is whether an effective order or record of the competent authority exists, and whether because of it the candidate is disqualified under Section 19.</p></div>
<div class="order"><h3>Model RO noting</h3>
<blockquote id="t38">On examination of the records produced, it was found that the candidate Shri ______ was removed from office under Section 38(1) of the Rajasthan Panchayati Raj Act, 1994 by order dated ______ / findings were recorded under the proviso to Section 38. As per Section 38(3), the period of 5 years from the date of the said removal / findings has not been completed. Therefore, in accordance with the provisions of Section 38(3) read with Section 19(h) of the Act, the candidate is not qualified to be elected in the present election. Therefore, the nomination paper is rejected.</blockquote>
<button class="btn copy" data-t="t38">Copy</button></div>`,
    ],
  },

  memo: {
    title: 'Memo: when, and for what',
    navLabel: 'Memo',
    tags: ['Rule 25, 27, 56, 58'],
    parts: [
      `<p>The Rajasthan Panchayati Raj (Election) Rules, 1994 contain no independent statutory rule or form called a &ldquo;Memo&rdquo;. A memo is a procedural step by the RO: telling the candidate about a defect, asking for necessary information, or giving an opportunity to furnish a document/declaration within a fixed time. Its limits are set by Rules 25, 27, 56, 58 and Section 19.</p>
<div class="grid">
<div class="card"><h4><span class="pill yes">Curable defect</span></h4><p>One that does not destroy the basic identity of the nomination or a statutory condition. Examples: a declaration/proforma linked to Section 19 not given, incomplete information about a criminal case, or some fact needing clarification to decide qualification.</p></div>
<div class="card"><h4><span class="pill no">Basic / mandatory defect</span></h4><p>If the basic nomination paper itself was not duly presented as per Rule 25 (Form IV + IV-D, filled in and signed), a new or fundamental nomination cannot be completed through a memo. Rule 25(2): a paper not presented in accordance with the rules may be rejected.</p></div>
</div>
<h3>What can be asked for through a memo</h3>
<div class="tw"><table><thead><tr><th>Defect / document</th><th>Memo position</th><th>Last time</th></tr></thead><tbody>
<tr><td>Form IV-D / qualification-disqualification declaration</td><td>If not given, the RO may ask for the information</td><td>Before or during scrutiny, at a time fixed by the RO</td></tr>
<tr><td>Information on criminal cases</td><td>Memo / clarification possible</td><td>Up to scrutiny</td></tr>
<tr><td>Information on convictions</td><td>Memo / clarification possible</td><td>Up to scrutiny</td></tr>
<tr><td>Incomplete statutory declaration</td><td>Opportunity to correct, depending on the facts</td><td>Before / during scrutiny</td></tr>
<tr><td><b>SC/ST/OBC certificate</b>, reserved seat</td><td><span class="pill no">Not an &ldquo;any time later&rdquo; document</span></td><td>With the nomination, as per Rule 25</td></tr>
<tr><td><b>Recognised party's authorization letter</b></td><td><span class="pill no">Special time limit; not proper to extend by memo</span></td><td>Last day of nomination, by 3 PM</td></tr>
<tr><td>5 proposers (independent)</td><td>A basic condition of nomination</td><td>When presenting the nomination</td></tr>
<tr><td>1 proposer (recognised party)</td><td>A basic condition of nomination</td><td>When presenting the nomination</td></tr>
<tr><td>Security deposit</td><td>A statutory condition; do not let it be completed later by memo</td><td>At the prescribed nomination stage</td></tr>
<tr><td>Original nomination paper / signature</td><td>A new nomination cannot be created by memo</td><td>When presenting the nomination</td></tr>
</tbody></table></div>
<div class="note"><strong class="t">Purpose of a memo</strong><p>Not &ldquo;what was required today was not given; give it any time later and the nomination will become valid&rdquo;. Where the law allows an opportunity, clarification or information, it is to point out the defect and give an opportunity to complete it within the fixed time.</p></div>
<h3>Form IV-D not attached at all, or some columns blank</h3>
<ul>
<li><b>Not given at all:</b> as per Gopa Ram, the RO should issue a memo asking for it to be submitted. The RO may also take the necessary information during scrutiny.</li>
<li><b>Attached, but some columns blank:</b> rejecting at once for every blank column is not right. See whether the information is really necessary, whether there is any objection or material, and whether the candidate is willing to give the information.</li>
<li><b>Refusal to give information, or obstructing the inquiry by staying away from scrutiny:</b> the defect may be serious (substantial) and the nomination may be rejected.</li>
</ul>`,
    ],
  },

  final: {
    title: 'Withdrawal and the final list',
    navLabel: 'Withdrawal & list',
    tags: ['Rule 28', 'Rule 29', '58(5)(d)'],
    parts: [
      `<div class="grid">
<div class="card"><h4>How to withdraw <span class="rule">28</span></h4><p>Written notice, two copies, with the candidate's signature/thumb impression, on the fixed date and time, to the RO in the prescribed manner. Rule 28(4): display a copy at a conspicuous place.</p></div>
<div class="card"><h4>Late withdrawal <span class="rule">28(2)</span></h4><p>No notice is accepted after the fixed day and time. Go by the exact time in the notification.</p></div>
<div class="card"><h4>Withdrawal cannot be cancelled <span class="rule">28(3)</span></h4><p>Once a valid withdrawal has been given, it cannot be taken back. A request at 12:00 to cancel a withdrawal given at 11:00 is not accepted.</p></div>
</div>
<h3>Final list, Form V</h3>
<p>Only candidates with an <b>accepted nomination who have not withdrawn</b>. Rule 58(5)(d): two categories, and Hindi alphabetical order within each category.</p>
<div class="grid">
<div class="card"><h4>Category 1</h4><p>Candidates of recognised political parties</p></div>
<div class="card"><h4>Category 2</h4><p>Other candidates</p></div>
</div>
<h3>Example</h3>
<div class="tw"><table><thead><tr><th>Candidate</th><th>After scrutiny</th><th>After withdrawal</th></tr></thead><tbody>
<tr><td>Ram (BJP)</td><td><span class="pill yes">Accepted</span></td><td>In the final list</td></tr>
<tr><td>Shyam (independent)</td><td><span class="pill yes">Accepted</span></td><td><span class="pill mid">Withdrawn</span> Not in the list</td></tr>
<tr><td>Mohan (Congress)</td><td><span class="pill yes">Accepted</span></td><td>In the final list</td></tr>
<tr><td>Suresh (independent)</td><td><span class="pill yes">Accepted</span></td><td>In the final list</td></tr>
<tr><td>Dinesh (BJP)</td><td><span class="pill no">Rejected</span></td><td>Not in the list</td></tr>
</tbody></table></div>
<div class="note ok"><strong class="t">Final list (Form V)</strong>
<p><b>Candidates of recognised political parties:</b> 1. Mohan (Congress) 2. Ram (BJP)</p>
<p><b>Other candidates:</b> 3. Suresh (independent)</p></div>
<h3>If only one candidate remains</h3>
<p>If only one valid candidate remains after withdrawal, there will be no poll and he/she will be declared <b>elected unopposed (duly elected)</b>. If two or more remain: prepare the final list, order by category, Hindi alphabetical order, allot symbols, publish the list, then the poll.</p>`,
    ],
  },

  symbol: {
    title: 'Election symbols',
    navLabel: 'Symbols',
    tags: ['Rule 58(6)', 'Page 120'],
    parts: [
      `<div class="tw"><table><thead><tr><th>Clause</th><th>Provision</th></tr></thead><tbody>
<tr><td><span class="rule">58(6)(a)</span></td><td>The State Election Commission specifies, by notification in the Gazette, the election symbols and the restrictions on the choice of symbols.</td></tr>
<tr><td><span class="rule">58(6)(b)</span></td><td>A candidate set up by a recognised party gets that party's reserved symbol, under Rule 58 and the Election Symbols (Reservation and Allotment) Order. Condition: the party has set up <b>only one candidate</b> in that constituency.</td></tr>
<tr><td><span class="rule">58(6)(c)</span></td><td>Where more than one nomination paper is delivered, only the symbol choice in the <b>paper delivered first</b> is considered, even if that first paper is later rejected.</td></tr>
<tr><td><span class="rule">58(6)(d)</span></td><td>The candidate submits the nomination in Form IV-A + IV-D and states the choice of symbol.</td></tr>
<tr><td><span class="rule">58(6)(e)</span></td><td>If two or more candidates ask for the same symbol, the RO will decide by <b>lot</b> (including a computerised random draw).</td></tr>
<tr><td><span class="rule">58(6)(f)</span></td><td>The RO's allotment is <b>final</b>, but if it is contrary to the State Election Commission's directions, the Commission may revise it.</td></tr>
</tbody></table></div>`,
    ],
  },

  checklist: {
    title: 'Scrutiny checklist',
    navLabel: 'Checklist',
    tags: ['46 points'],
    parts: [
      `<p>Tick the points while scrutinising one candidate. Ticks are remembered in your browser and are not shared.</p>`,
    ],
  },

  orders: {
    title: 'Model RO orders',
    navLabel: 'Orders',
    tags: ['Rule 27(4)'],
    parts: [
      `<p>Fill in the blanks before use. The copy button puts the text on the clipboard. (These are English renderings of the Hindi templates; switch to Hindi for the original wording.)</p>
<div class="order"><h3>Order accepting a nomination</h3>
<blockquote id="o1">I have examined the Form IV-A and Form IV-D nomination paper presented by candidate Shri/Smt. __________ in accordance with the relevant provisions of Rule 27 and Rule 58. On examining the candidate's eligibility, status in the electoral roll, proposer/proposers, security deposit and the disqualifications under Section 19, no statutory defect was found in the nomination paper on the basis of which it would be necessary to reject it. Therefore, the nomination paper is accepted.</blockquote>
<button class="btn copy" data-t="o1">Copy</button>
<span class="rule">RO signature / date / time</span></div>
<div class="order"><h3>Order rejecting a nomination</h3>
<blockquote id="o2">I have examined the nomination paper presented by candidate Shri/Smt. __________ in accordance with Rule 27 and Rule 58. On examination it was found that __________. The said defect/disqualification is a statutory ground for rejecting the nomination under Rule 27(3)(__) read with Section 19(__). Therefore, the nomination paper is rejected.</blockquote>
<button class="btn copy" data-t="o2">Copy</button>
<p class="mt"><b>Special care:</b> in a rejection order, write all three: Rule + Section + specific reason.</p></div>
<div class="order"><h3>RO note in a criminal case</h3>
<blockquote id="o3">The disqualification under Section 19(gg) is not established automatically merely by the registration of an FIR. The order of the concerned court should be seen to confirm cognizance by the Court, the framing of charges and the prescribed punishment for the offence.</blockquote>
<button class="btn copy" data-t="o3">Copy</button></div>
<div class="order"><h3>Objection / Speaking Order Sheet</h3>
<blockquote id="o4">Objection No. ______ | Objector/candidate ______ | Ground ______ | Document relied on ______ | Candidate's reply ______ | RO's finding ______ | Final decision: ☐ Accepted ☐ Rejected</blockquote>
<button class="btn copy" data-t="o4">Copy</button></div>
<h3>Summary of the scrutiny register (at the end)</h3>
<div class="tw"><table><tbody>
<tr><td><b>Total Nomination Papers received</b></td><td>______</td><td><b>Accepted</b></td><td>______</td></tr>
<tr><td><b>Rejected</b></td><td>______</td><td><b>Withdrawn</b></td><td>______</td></tr>
<tr><td><b>Final Contesting Candidates</b></td><td>______</td><td><b>Symbol allotment complete</b></td><td>☐ Yes ☐ No</td></tr>
</tbody></table></div>`,
    ],
  },

  forms: {
    title: 'Forms and appendices (PDF)',
    navLabel: 'Form PDFs',
    tags: ['3 PDFs'],
    parts: [
      `<p>Three collections of filled-in sample forms. Each PDF opens in a new tab. The information filled in the forms is a sample; replace it with the facts of your own case before use. The PDFs themselves are in Hindi.</p>
<div class="grid">
<div class="card"><h4>For candidates, ZP / PS 2026</h4><p>16 pages. Nomination paper, candidate's declaration, toilet declaration/affidavit, statistical information and the list of nominated candidates.</p><p><a class="btn" href="/documents/ps/filled-forms/1-zp-ps-for-candidate-2026.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></p></div>
<div class="card"><h4>For the polling party, ZP / PS</h4><p>22 pages. Presiding officer's declarations and diary, ballot paper account, age declaration, voter slip, notice, appointment of election agent and polling agent, oath, voters' register.</p><p><a class="btn" href="/documents/ps/filled-forms/2-zp-ps-for-polling-party.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></p></div>
<div class="card"><h4>All types of filled-in forms 2026</h4><p>33 pages. Sarpanch/Panch and PS/ZP forms together, including the return of result, polling booth layout, ballot box label, model notice and notice of withdrawal.</p><p><a class="btn" href="/documents/panch/main/main-4-2026.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></p></div>
</div>
<details><summary><span class="n">1</span><span>Which forms are in the candidates' PDF</span></summary><div class="a">
<div class="tw"><table><thead><tr><th>Appendix</th><th>Format</th><th>Use</th></tr></thead><tbody>
<tr><td>Appendix-6.A</td><td>Format-4 क (A)</td><td>Nomination paper</td></tr>
<tr><td>Appendix-6.B</td><td>Format-4 घ (D)</td><td>Declaration to be given by the candidate</td></tr>
<tr><td>Appendix-6.C</td><td>-</td><td>Declaration / undertaking regarding a functional sanitary toilet</td></tr>
<tr><td>Appendix-6.D</td><td>Annexure I-A</td><td>Affidavit</td></tr>
<tr><td>Appendix-6.E</td><td>-</td><td>Form for statistical information</td></tr>
<tr><td>Appendix-8.A</td><td>Format-5</td><td>List of validly nominated candidates whose nomination papers were accepted and not withdrawn. Zila Parishad member / Panchayat Samiti member</td></tr>
</tbody></table></div></div></details>
<details><summary><span class="n">2</span><span>Which forms are in the polling party's PDF</span></summary><div class="a">
<div class="tw"><table><thead><tr><th>Appendix</th><th>Use</th></tr></thead><tbody>
<tr><td>Appendix-7</td><td>Declarations made by the presiding officer before the poll begins, during the poll and at the end of the poll</td></tr>
<tr><td>Appendix-8</td><td>Diary of the presiding officer</td></tr>
<tr><td>Appendix-9</td><td>Account of votes recorded</td></tr>
<tr><td>Appendix-10</td><td>Format of declaration by an elector regarding his/her age</td></tr>
<tr><td>Appendix-11</td><td>List of voters making an age declaration</td></tr>
<tr><td>Appendix-12</td><td>Details of the envelopes the polling party must prepare booth-wise (when Zila Parishad and Panchayat Samiti member polls are held together)</td></tr>
<tr><td>Appendix-13</td><td>Voter slip</td></tr>
<tr><td>Appendix-14</td><td>Notice: election for the Panchayat Samiti / Zila Parishad constituency</td></tr>
<tr><td>Appendix-19</td><td>Format of mock-poll certificate</td></tr>
<tr><td>Format-8</td><td>Format for appointment of an election agent</td></tr>
<tr><td>Format-9</td><td>Format for appointment of a polling agent</td></tr>
<tr><td>Format-10</td><td>Format for appointment of a counting agent</td></tr>
<tr><td>Format-11</td><td>Format of oath</td></tr>
<tr><td>Format-12</td><td>Voters' register</td></tr>
<tr><td>Format-13</td><td>List of tendered votes</td></tr>
</tbody></table></div></div></details>
<details><summary><span class="n">3</span><span>Contents of the &ldquo;All types of filled-in forms&rdquo; PDF</span></summary><div class="a">
<div class="tw"><table><thead><tr><th>Appendix</th><th>Format</th><th>Use</th></tr></thead><tbody>
<tr><td>6.A</td><td>Format-4</td><td>Nomination paper</td></tr>
<tr><td>6.B</td><td>Format-4घ (D)</td><td>Declaration to be given by the candidate</td></tr>
<tr><td>6.C</td><td>-</td><td>Declaration / undertaking regarding a functional sanitary toilet</td></tr>
<tr><td>6.D</td><td>Annexure I-B</td><td>Affidavit</td></tr>
<tr><td>6.E</td><td>-</td><td>Form for statistical information</td></tr>
<tr><td>8.A</td><td>Format-5</td><td>List of nominated candidates, for Sarpanch</td></tr>
<tr><td>8.B</td><td>Format-5</td><td>List of nominated candidates, for Panch</td></tr>
<tr><td>9</td><td>Format-6</td><td>List of tendered votes</td></tr>
<tr><td>10</td><td>Format-7</td><td>Return showing the results of the election to the post of Panch / Sarpanch / Panchayat Samiti member / Zila Parishad member</td></tr>
<tr><td>11</td><td>-</td><td>Layout plan of the polling booth</td></tr>
<tr><td>12</td><td>Format-8</td><td>Format for appointment of an election agent</td></tr>
<tr><td>13</td><td>-</td><td>Format of declaration by an elector regarding his/her age in the election of Panch / Sarpanch / Panchayat Samiti / Zila Parishad member</td></tr>
<tr><td>14</td><td>-</td><td>List of voters making an age declaration</td></tr>
<tr><td>15</td><td>-</td><td>Details of the envelopes the polling parties must prepare</td></tr>
<tr><td>16</td><td>Format-9</td><td>Appointment of a polling agent</td></tr>
<tr><td>17</td><td>Format-10</td><td>Appointment of a counting agent</td></tr>
<tr><td>18</td><td>Format-11</td><td>Format of oath</td></tr>
<tr><td>19</td><td>-</td><td>Extract from the guide booklet on the standard form of the Nagari script and spelling, 1992, by the Language Department, Government of Rajasthan</td></tr>
<tr><td>21</td><td>-</td><td>Declarations by the presiding officer</td></tr>
<tr><td>22</td><td>-</td><td>List showing alternative photographs</td></tr>
<tr><td>23 A</td><td>-</td><td>Panchayat Samiti member and Zila Parishad member election, diary of the polling officer (presiding officer)</td></tr>
<tr><td>23 B</td><td>-</td><td>Panch and Sarpanch election, diary of the polling officer (presiding officer)</td></tr>
<tr><td>24</td><td>-</td><td>Account of paper seals</td></tr>
<tr><td>25</td><td>-</td><td>Form of Statistics, Sarpanch</td></tr>
<tr><td>26</td><td>-</td><td>Ballot paper account</td></tr>
<tr><td>27</td><td>-</td><td>Notice of withdrawal (post of Sarpanch)</td></tr>
<tr><td>28</td><td>-</td><td>Ballot box label: Panch/Sarpanch election in white; Panchayat Samiti / Zila Parishad member election in pink</td></tr>
<tr><td>29</td><td>-</td><td>Model form notice, Up-Sarpanch election</td></tr>
</tbody></table></div>
<p class="fineprint">The list follows the contents page of the PDF. See the original PDF for the exact page and details of each form.</p></div></details>
<div class="note warn"><strong class="t">Note</strong><p>These PDFs are filled-in samples prepared by a trainer for convenience, not the State Election Commission's original forms. Check against the Commission's current forms and instructions before use.</p></div>`,
    ],
  },

  letters: {
    title: 'Important letters (SEC Rajasthan)',
    navLabel: 'Letters',
    tags: ['29 letters'],
    parts: [
      `<p>Important letters of the State Election Commission relating to the Panchayat Election 2026, with letter number and date. Clicking &ldquo;Open PDF&rdquo; opens the original letter on the Commission's website in a new tab.</p>`,
      `<div class="note warn"><strong class="t">Note</strong><p>For the latest position, check the letters against the Commission's website (sec.rajasthan.gov.in). The subject summaries are given for convenience; only the text of the original PDF is authoritative.</p></div>`,
    ],
  },

  faq: {
    title: '100 questions and answers',
    navLabel: 'FAQ',
    tags: ['FAQ'],
    parts: [`<p>Search by question, answer or rule number.</p>`],
  },

  cases: {
    title: 'Judicial decisions and special situations',
    navLabel: 'Judgments',
    tags: [],
    parts: [
      `<div class="grid">
<div class="card"><h4>Gopa Ram v. Election Tribunal, Bikaner</h4><p>Rajasthan High Court, DB Civil Special Appeal (Writ) 650/2006, decided 11.01.2007. The RO has the power to call for the information and proforma necessary to examine qualification/disqualification. But if the candidate avoids giving the information and obstructs scrutiny, the defect may be substantial.</p></div>
<div class="card"><h4>Bachchu Singh v. Kamaldeep Singh</h4><p>Rajasthan High Court, 24.11.2016. Discusses Rule 25 and 27(3)(d); mentions a &ldquo;memo for removal of defect&rdquo; in scrutiny. Issuing a memo does not by itself make a nomination valid. The final decision rests on compliance with Rule 25 and scrutiny under Rule 27.</p></div>
<div class="card"><h4>Mangi Devi v. State of Rajasthan</h4><p>Rajasthan High Court (Jodhpur), 04.12.2014. A Sarpanch election case. Merely running a Fair Price Shop and an inquiry being pending was not held to be a disqualification under Section 19; the petition was dismissed. A ration dealer may contest the election within the scope of the rules.</p></div>
</div>
<h3>Panchayat Sahayak and MGNREGA employees (Section 19(d))</h3>
<ul>
<li><b>Gram Panchayat Sahayak:</b> a contractual appointment by the Gram Panchayat on a fixed remuneration (Rajasthan High Court, 2025 decision). So the argument &ldquo;I am not a regular government employee, I am on contract&rdquo; alone is not enough to escape 19(d).</li>
<li><b>MGNREGA employee:</b> no rejection merely for being a &ldquo;contractual employee&rdquo;. If, as a Gram Rozgar Sahayak or other employee, he/she holds a salaried post / place of profit under a Panchayati Raj institution, a disqualification under 19(d) may arise (Rajasthan High Court, 27 January 2026).</li>
</ul>
<h3>The 15 most important references for the RO</h3>`,
      `<p class="fineprint">* The page numbers of the Forms are marked with an asterisk in the source file. Check against the printed Manual.</p>`,
    ],
  },
}

/** Section 19 table, English columns 2 and 3 — keyed by clause (column 1 is kept verbatim). */
export const S19_EN: Record<string, [string, string]> = {
  '19(a)': ['Disqualified for election to the State Legislature', 'Applicable law'],
  '19(aa)': ['Found guilty of a corrupt practice by a competent court', 'Court order'],
  '19(b)':
    ['Certain salaried appointments in a local authority, university, corporation, body, enterprise or co-operative society controlled/financed by the State Govt', 'Appointment status'],
  '19(c)': ['Dismissed from State Govt service for misconduct involving moral turpitude + disqualified from public service', 'Dismissal order'],
  '19(d)': ['Salaried post / place of profit under a PRI', 'Service record'],
  '19(e)': ['Direct/indirect interest in a contract/work of a PRI', 'Contract record'],
  '19(f)': ['Bodily/mental defect or disease making the person incapable of work', 'Applicable statutory evidence'],
  '19(g)': ['Convicted by a competent court + imprisonment of 6 months or more, unless reversed/remitted/pardoned', 'Judgment'],
  '19(gg)': ['Cognizance + charge framed, for an offence punishable with 5 years or more', 'Court order'],
  '19(h)': ['Temporarily ineligible under Section 38', 'Section 38 status'],
  '19(i)': ['PRI tax/fee outstanding even 2 months after demand', 'Dues record'],
  '19(j)': ['Legal practitioner for or against the PRI', 'Professional status'],
  '19(k)': ['Convicted under the Rajasthan Prevention of Mrityu Bhoj Act', 'Conviction'],
  '19(l)': ['More than two children: this clause has been deleted (Amendment Act 2026, notification 25.03.2026)', 'No longer a disqualification; do not reject on this ground'],
  '19(m)': ['Former Chairperson/Deputy Chairperson in default of specified PRI dues', 'Defaulter list'],
  '19(n)': ['Not a member of that class on an SC/ST/BC reserved seat', 'Caste certificate'],
  '19(o)': ['Not a woman on a seat reserved for women', 'Eligibility'],
  '19(p)': ['Not both class + woman on an SC/ST/BC women\'s reserved seat', 'Both'],
  '19(q)': ['No functional sanitary toilet and a family member practises open defecation', 'Required evidence'],
  '19(r)': ['Provision on educational qualification. Remark in the source table: “currently removed”', 'Discrepancy in the source; see the gazetted text'],
}

/** Scrutiny checklist in English: same groups, items and order as CHECKLIST. Rule references kept. */
export const CHECKLIST_EN: ChecklistGroup[] = [
  ['1. Nomination', [
    ['The basic nomination form is in Form IV-A', 'Rule 58(6)(d)'],
    ['The correct ZP/PS constituency number is entered', 'Rule 58'],
    ['Name / father\'s or husband\'s name matches the electoral roll', 'Form IV-A'],
    ['Sex / age details are complete', 'Form IV-A'],
    ['The name is in the relevant PRI electoral roll', 'Sec. 19'],
  ]],
  ['2. Reservation', [
    ['Seat checked as SC/ST/OBC/women/general', 'Sec. 15 + order'],
    ['On a reserved seat, the relevant class certificate is attached', 'Form IV-A + SEC instructions'],
    ['The caste certificate is from a competent authority', 'SEC instruction'],
    ['On a women\'s reserved seat, the candidate is a woman', 'Reservation order'],
  ]],
  ['3. Proposers', [
    ['Recognised party: 1 proposer', 'Rule 58(5)(e)'],
    ['Other candidates: 5 proposers', 'Rule 58(5)(f)'],
    ['Every proposer is an elector of the same constituency', 'Rule 58(5)(e),(f)'],
    ['No proposer has signed for more than one candidate (order of the paper received first recorded)', 'Rule 58(5)(g)'],
  ]],
  ['4. Security deposit', [
    ['General: ₹500 deposited', 'Rule 58(5)(a)'],
    ['Women / SC / ST / OBC: ₹250 deposited', 'Rule 58(5)(a)'],
    ['Proof of deposit (treasury / challan / payment record)', 'Rule 58'],
    ['Only one deposit taken where there is more than one paper', 'Rule 58(5)(c)'],
  ]],
  ['5. Political party candidate', [
    ['Is a recognised party\'s candidate, has the letter of authority', 'Rule 58(5)(e)'],
    ['Letter from the president / head of the state unit / authorised person', 'Rule 58(5)(e)'],
    ['Letter received by 3:00 PM on the last day of nomination', 'Rule 58(5)(e)'],
    ['Only one candidate of the party in the same constituency', 'Rule 58(6)(b)'],
  ]],
  ['6. Election symbol', [
    ['Form IV-D is with Form IV-A', 'Rule 58(6)(d)'],
    ['A choice of symbol has been given', 'Rule 58(6)(d),(e)'],
    ['Where there is more than one paper, the choice in the paper delivered first is taken', 'Rule 58(6)(c)'],
  ]],
  ['7. Form IV-D declaration', [
    ['Status of charges framed in pending cases punishable with 5 years or more', 'Form IV-D'],
    ['Details of conviction / sentence', 'Form IV-D'],
    ['Details of children: no rejection on this ground (Section 19(l) deleted)', 'Form IV-D'],
    ['Details of assets (self / spouse / dependants)', 'Form IV-D'],
  ]],
  ['8. Section 19 disqualifications', [
    ['19(a) disqualification relating to Legislative Assembly elections', 'Sec. 19(a)'],
    ['19(aa) court order on a corrupt practice', 'Sec. 19(aa)'],
    ['Barred employment with government/local bodies', 'Sec. 19(b) etc.'],
    ['Salaried post / place of profit under a PRI', 'Sec. 19(d)'],
    ['Barred interest in a PRI contract', 'Sec. 19(e)'],
    ['Conviction-related grounds, 19(g)/(gg)', 'Sec. 19'],
  ]],
  ['9. Signatures', [
    ['Candidate\'s signature / thumb impression complete', 'Form IV-A/IV-D'],
    ['Required proposers\' signatures present', 'Rule 58'],
    ['Name, electoral roll serial number etc. clear', 'Form IV-A'],
  ]],
  ['10. Scrutiny', [
    ['Was any objection received?', 'Scrutiny provisions'],
    ['The candidate was given a reasonable opportunity to reply', 'Scrutiny, 27(2)'],
    ['Rejection only on the basis of an applicable rule/legal requirement', 'Rule 27 + 58'],
    ['No automatic rejection for a minor defect', 'Scrutiny principle'],
    ['On rejection, specific reasons written in the order sheet', 'Rule 27(4)'],
  ]],
  ['11. Finalisation', [
    ['List of accepted nominations prepared', 'Form IV-C'],
    ['Withdrawals by the fixed last date/time', 'Rule 28/29'],
    ['Final list: accepted + not withdrawn', 'Form V'],
    ['Symbols allotted to the final candidates', 'Rule 58(6)'],
  ]],
]

/** FAQ in English: same 14 groups and 100 questions, in the same order as FAQ_GROUPS. */
export const FAQ_EN: FaqGroup[] = [
  ['Part A: Election programme and Returning Officer', [
    ['Under which rule is the programme for the election of Panchayat Samiti and Zila Parishad members fixed?', 'Rule 58(1).'],
    ['Which stages are mainly fixed in the election programme?', 'Nomination, scrutiny, withdrawal, poll and counting.'],
    ['Which rule relates to the role of the Returning Officer?', 'Rule 58(2), (3) and (4).'],
    ['Under which rule is nomination conducted?', 'Rule 58(5).'],
    ['Under which rule does scrutiny take place?', 'Rule 27, read with Rule 58(5) in the context of PS/ZP elections.'],
    ['Under which rule is withdrawal?', 'Rule 28.'],
    ['Under which rule is the final list of contesting candidates prepared?', 'Rule 29.'],
    ['In which rule are the provisions on election symbols?', 'Rule 58(6).'],
    ['What is the prescribed format of the nomination for a PS/ZP member?', 'Form IV-A.'],
    ['Which format of the candidate\'s declaration relates to the nomination?', 'Form IV-D.'],
  ]],
  ['Part B: Nomination paper', [
    ['Before which officer is the nomination paper presented?', 'Before the Returning Officer, or the Assistant Returning Officer authorised as per law/the election programme.'],
    ['What should the RO examine when examining the nomination paper?', 'The candidate\'s eligibility/ineligibility, status in the electoral roll, proposer/proposers, required declarations, security deposit and other statutory requirements.'],
    ['Which declaration is presented with the nomination paper?', 'Form IV-D.'],
    ['Is a candidate automatically deemed duly nominated merely because the nomination paper has been received?', 'No. Validity is determined only after scrutiny of the statutory requirements of the nomination.'],
    ['Is presenting more than one nomination paper by itself a ground for ending the candidature?', 'No. Where there is more than one nomination paper in the same constituency, the other statutory requirements will be examined separately.'],
    ['What is the position of the security deposit when more than one nomination paper is given?', 'One security deposit is sufficient for the same constituency, provided the other requirements are met.'],
    ['Does a candidate contesting from different constituencies need a separate security deposit for each constituency?', 'Yes. A separate constituency is a separate election; the security requirement for that constituency will be examined separately.'],
    ['Should the RO look at every entry of the nomination paper?', 'Yes. In scrutiny each nomination paper should be examined separately.'],
    ['Can a nomination paper be rejected merely on the basis of an oral objection?', 'No. The RO should decide on the basis of the nomination paper and the available statutory records.'],
    ['Is the candidate given the facility to examine his/her nomination paper at the time of scrutiny?', 'Yes. Rule 27(2): a reasonable facility to examine one\'s own nomination paper and a reasonable opportunity to object to others.'],
  ]],
  ['Part C: Proposers', [
    ['How many proposers are required for a candidate set up by a recognised party?', 'One proposer, who is an elector of the same constituency.'],
    ['How many proposers are required for other candidates?', 'Five proposers, who are electors of the same constituency.'],
    ['Must the one proposer of a party candidate be an elector of the same constituency?', 'Yes. Rule 58(5)(e).'],
    ['Must the five proposers of other candidates be electors of the same constituency?', 'Yes. Rule 58(5)(f).'],
    ['Can one elector be a proposer on the nomination papers of more than one candidate?', 'No.'],
    ['What happens if an elector has signed as proposer on the papers of more than one candidate?', 'The paper on which his signature was received first by the RO will be kept; the nomination received later will be invalid. Rule 58(5)(g).'],
    ['Must the proposer belong to the constituency?', 'Yes, the proposer must be an elector of the same constituency.'],
    ['What is the result if a party candidate\'s nomination does not have the required proposer?', 'If the requirement of Rule 58(5)(e) is not met, the candidate will not be deemed duly nominated.'],
    ['What will be done if there is a shortfall in the five required proposers?', 'Because the requirement of Rule 58(5)(f) is not met, the validity of the nomination will be affected.'],
    ['Is the number of proposers a mere formality?', 'No. Where the rule fixes the number, it is a statutory requirement of the nomination.'],
  ]],
  ['Part D: Political party candidates', [
    ['By when must the party\'s letter be presented for a candidate to be a recognised party\'s candidate?', 'By 3:00 PM on the last day of nomination.'],
    ['By whom must the party letter be signed?', 'By the party president / head of the state unit or a person authorised by them.'],
    ['What happens if the party\'s authorised letter is not presented within the fixed time?', 'The candidate will not be recognised as a candidate set up by the party; after that, the other statutory requirements of the nomination will be examined.'],
    ['Does a political party\'s candidate need five proposers?', 'For a recognised party\'s candidate, the rule provides for one proposer.'],
    ['Will every party candidate automatically get the party\'s election symbol?', 'The relevant rules and the statutory conditions of being a candidate set up by the party must be met.'],
    ['Which rule applies to the reserved symbol?', 'Rule 58(6)(b).'],
    ['What must be considered if a party has set up more than one candidate in a constituency?', 'The position on allotment of the reserved symbol must be examined according to the condition in Rule 58(6)(b).'],
  ]],
  ['Part E: Security deposit', [
    ['What is the importance of the security deposit at the time of nomination?', 'It is one of the statutory requirements of the nomination; if the prescribed security is not deposited, the nomination may be affected.'],
    ['What should the RO do if the prescribed security is not deposited?', 'The validity of the nomination should be determined according to the statutory provisions; this is shown as a rejection case.'],
    ['Must a separate security be given for each of several nomination papers in the same constituency?', 'No; one security deposit is sufficient for the same constituency.'],
  ]],
  ['Part F: Scrutiny, Rule 27', [
    ['On which day is the scrutiny of nomination papers done?', 'On the day and at the time fixed in the election programme.'],
    ['What is the RO\'s main task under Rule 27(1)?', 'To scrutinise the nomination papers on the fixed day and time.'],
    ['Who may be present at the time of scrutiny?', 'Rule 27(2): the candidate himself/herself; “the candidates themselves and no other person may attend”.'],
    ['Is the candidate given an opportunity to object to other nomination papers?', 'Yes.'],
    ['What are the main rejection grounds in Rule 27(3)?', '(1) The candidate is not qualified or is disqualified; (2) not the same person whose name is in the electoral roll; (3) the signature/thumb impression is not genuine or was obtained by fraud, coercion or undue influence.'],
    ['Should the RO examine each nomination paper individually?', 'Yes. There is a direction to examine each nomination paper individually.'],
    ['Is writing only “Rejected” sufficient?', 'No. It is necessary to record brief reasons for rejection.'],
    ['What decision should be endorsed on an accepted nomination paper?', 'ACCEPTED, with brief reasons.'],
    ['What should be endorsed on a rejected nomination paper?', 'REJECTED, with brief reasons.'],
    ['Can the scrutiny proceedings be adjourned?', 'No. Rule 27(5): scrutiny will be completed the same day and the proceedings will not be adjourned.'],
  ]],
  ['Part G: Practical cases in scrutiny', [
    ['The name has a minor spelling difference from the electoral roll, and identity is clear. Should it be rejected?', 'A spelling difference alone is not treated as a ground for rejection, if identity is clear.'],
    ['The candidate\'s required signature is missing altogether. Is this a serious defect?', 'Yes. Where a signature/thumb impression is required and is missing altogether, it is described as a rejection case.'],
    ['Can a signature obtained by fraud be treated as valid?', 'Rule 27(3): a signature/thumb impression obtained by fraud, coercion or undue influence may be a ground for rejection.'],
    ['What if the candidate is not the person whose name is in the electoral roll?', 'Rule 27(3)(b): the nomination may be rejected.'],
    ['Can the RO reject a nomination without writing reasons?', 'No. It is necessary to record the reasons for rejection.'],
    ['Should the RO hear objections?', 'Yes, Rule 27(2): a reasonable opportunity to the candidate.'],
    ['Can the RO decide merely by accepting what the objector says?', 'No. An independent decision on the basis of the nomination paper, the electoral roll, the available documents and the law.'],
    ['In what form should the decision in scrutiny be recorded?', 'ACCEPTED/REJECTED on each nomination paper, with brief reasons in case of rejection.'],
    ['Should the decision on all nomination papers be made in one collective order?', 'The source emphasises endorsing a separate decision on each nomination paper.'],
    ['Should the RO look carefully at every document at the time of scrutiny?', 'Yes. Scrutiny is the RO\'s statutory process of examination.'],
  ]],
  ['Part H: Withdrawal and final list', [
    ['Under which rule does withdrawal take place?', 'Rule 28.'],
    ['Up to what time can a withdrawal be made?', 'Up to the last day and time fixed in the election programme.'],
    ['Which list is prepared after withdrawal?', 'The final list of contesting candidates.'],
    ['Under which rule is the final list?', 'Rule 29.'],
    ['What is the prescribed format of the final list?', 'Form V.'],
    ['What if only one valid candidate remains in a constituency?', 'If there is no other contesting candidate, the procedure for declaring him/her elected unopposed will apply.'],
    ['Will a rejected candidate be included in the final list?', 'No.'],
    ['Will a withdrawn candidate be kept in the final list?', 'No.'],
  ]],
  ['Part I: Election symbols', [
    ['What is the basic provision on symbols in the PS/ZP member election?', 'Rule 58(6).'],
    ['If more than one nomination paper was given, from which paper is the symbol preference taken?', 'The preference in the nomination paper presented first will be considered.'],
    ['If the first nomination paper is later rejected, does its symbol preference lapse?', 'No. Rule 58(6)(c): the preference in the first paper will be considered, even if it was rejected.'],
    ['What does the candidate indicate in the nomination paper?', 'His/her symbol preference.'],
    ['What happens if two candidates have preferred the same symbol?', 'For the same preference, a lot/computerised random draw may apply. Rule 58(6)(e)(ii).'],
    ['Is the symbol allotment made by the RO final?', 'Generally yes, but subject to the condition that it conforms to the State Election Commission\'s directions.'],
    ['Who fixes the list of symbols?', 'The State Election Commission, by notification.'],
  ]],
  ['Part J: Qualification / disqualification', [
    ['In which section is the basic statutory provision on qualification and disqualification?', 'Section 19 of the Rajasthan Panchayati Raj Act, 1994.'],
    ['What is the importance of Section 19 for a person registered in the electoral roll?', 'Section 19 relates to the qualification/disqualification for contesting the election.'],
    ['Should the RO examine the Section 19 disqualifications in scrutiny?', 'Yes. Section 19 is clearly placed as Qualification/Disqualification.'],
    ['Does the candidate have to declare that he/she is not disqualified under Section 19?', 'The Form IV-D declaration contains such a provision.'],
    ['Does merely registering an FIR prove a Section 19 disqualification in every situation?', 'No. The statutory elements and records of the particular disqualification under examination must be examined.'],
  ]],
  ['Part K: Reserved constituencies', [
    ['In a reserved constituency, what additional point about the candidate is important?', 'Examination of eligibility from the relevant reserved class and of the prescribed certificate/records.'],
    ['Should eligibility for a reserved seat be accepted merely on the basis of a self-stated caste?', 'No. The necessary caste certificate and other documents should be examined.'],
    ['Why should the RO check the validity of the caste certificate on a reserved seat?', 'Because the candidate\'s eligibility on a reserved seat is linked to the relevant reservation category.'],
  ]],
  ['Part L: Form IV-A and IV-D', [
    ['What is Form IV-A for?', 'The nomination paper.'],
    ['What does Form IV-D relate to?', 'The candidate\'s declaration.'],
    ['Is it necessary to examine both Form IV-A and IV-D?', 'Yes, where both are to be presented as per the rules/instructions.'],
    ['Should the RO also look at the Form IV-D declaration in scrutiny?', 'Yes.'],
    ['Is it necessary to examine the candidate\'s identity details?', 'Yes. Rule 27(3)(b): the question of the identity of the person whose name is in the electoral roll is important.'],
  ]],
  ['Part M: Final list of candidates', [
    ['What is the purpose of the final list?', 'To finally show the candidates actually contesting the election after scrutiny and withdrawal.'],
    ['Will a rejected candidate remain in the final list?', 'No.'],
    ['Will a candidate who withdrew remain in the final list?', 'No.'],
    ['How are the names arranged in the final list?', 'In the order prescribed by the applicable rule/instruction, which mentions Hindi alphabetical order.'],
    ['How can the identity of candidates with the same name be made clear?', 'By additional identification details such as the father\'s/husband\'s name, as expected in the format/instructions of the final list.'],
  ]],
  ['Part N: Decision questions for the RO', [
    ['What should the RO do if a serious statutory defect is found?', 'Examine it under the applicable Rule 27 and related provisions and record a reasoned decision.'],
    ['Can the RO reject a nomination merely because someone has come with an objection?', 'No. The objection must be considered, but the final decision will be the RO\'s, on the basis of the law and the records.'],
    ['Is writing only “violation of the rules” in a rejection order sufficient?', 'No. It is necessary to record a brief statement of reasons.'],
    ['Should the RO also record a decision on an accepted nomination?', 'Yes. ACCEPTED/REJECTED should be endorsed on every paper.'],
    ['Is giving the candidate a reasonable opportunity in scrutiny the RO\'s duty?', 'Yes. Rule 27(2).'],
    ['What should be the most important principle of the RO\'s scrutiny decision?', 'An independent, impartial, document-based examination of each nomination paper, in conformity with the applicable law/rules.'],
    ['What is the most important statutory formula of scrutiny for the RO?', 'Separate examination of each paper → reasonable opportunity for objection/clarification → examination of eligibility/disqualification → a clear ACCEPTED/REJECTED decision → if REJECTED, a brief statement of reasons.'],
  ]],
]

/** Letter categories — keyed by the Hindi category used in LETTERS. */
export const LETTER_CATEGORIES_EN: Record<string, string> = {
  'चिह्न / मतपत्र': 'Symbols / ballot papers',
  'नामांकन / अभ्यर्थी': 'Nomination / candidates',
  'मतदान / EVM': 'Polling / EVM',
  'मतगणना': 'Counting',
  'आचार संहिता': 'Code of conduct',
  'सुविधाएँ': 'Voter facilities',
  'अन्य': 'Other',
}

export const GUIDE_SOURCE_NOTE_EN =
  'This page was built from the content of an uploaded Word file, &ldquo;RO Complete Nomination–Scrutiny–Withdrawal–Final List Manual&rdquo;, which is based on SEC Rajasthan\'s <i>Manual of Panchayati Raj Election Law (Rajasthan), 2026</i> (position as on 26.12.2025). It is not an official publication of the State Election Commission and is not legal advice. In case of doubt, see the original Official Gazette, Act, Rule, Notification or Order.'
