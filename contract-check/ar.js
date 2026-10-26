(function () {
  var T = {
    'Automatic renewal': 'التجديد التلقائي',
    'Notice period': 'مهلة الإشعار',
    'Early termination fee': 'رسوم الإنهاء المبكر',
    'Penalties and fines': 'الغرامات والجزاءات',
    'Deposits and deductions': 'مبلغ التأمين والخصومات',
    'Price or rent increases': 'زيادة السعر أو الإيجار',
    'One-sided changes': 'تعديلات من طرف واحد',
    'Non-compete or non-solicit': 'عدم المنافسة أو عدم الاستقطاب',
    'Probation': 'فترة التجربة',
    'Unpaid leave and salary deductions': 'الإجازة بدون راتب والخصم من الراتب',
    'Governing law and courts': 'القانون الواجب التطبيق والمحاكم',
    'Liability waiver': 'إخلاء المسؤولية',
    'Cancellation window and refunds': 'مهلة الإلغاء واسترداد المبالغ',
    'Arbitration or private dispute resolution': 'التحكيم أو تسوية النزاعات الخاصة',
    'Holding your passport': 'الاحتفاظ بجواز سفرك',
    'Security or blank cheques': 'شيكات الضمان أو الشيكات على بياض'
  };
  var SEV = { 'Hard look': 'يستحق تدقيقًا', 'Check this': 'تحقّق منه', 'Good to know': 'للعلم' };
  var NUMW = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, fourteen: 14, fifteen: 15, twenty: 20, thirty: 30, sixty: 60, ninety: 90 };
  function n(x) { var k = String(x).toLowerCase(); return NUMW[k] != null ? NUMW[k] : x; }
  var KIND = { 'tenancy contract': 'عقد إيجار', 'employment contract': 'عقد عمل', 'membership contract': 'عقد عضوية', 'phone or internet plan': 'باقة هاتف أو إنترنت', 'service contract': 'عقد خدمة' };
  var TIPK = { tenancy: 'الإيجار', 'job offer': 'عرض العمل', gym: 'النادي الرياضي', 'phone plan': 'باقة الهاتف' };
  var d = {
    'Contract Red Flags': 'إشارات التحذير في العقود',
    'Tool · Contracts · English + Arabic': 'أداة · العقود · إنجليزي + عربي',
    'Contract red flags.': 'إشارات التحذير في العقود.',
    'Before you sign a lease, gym membership, phone plan or job offer, paste the text here. It marks the clauses people most often regret missing, like auto-renewal, exit fees and deposit deductions, and explains each in plain words with a question to ask. It reads English and simple Arabic. The text never leaves your browser.':
      'قبل أن توقّع عقد إيجار أو اشتراك نادٍ رياضي أو باقة هاتف أو عرض عمل، الصق نصه هنا. تحدد الأداة البنود التي يندم الناس غالبًا على تفويتها، مثل التجديد التلقائي ورسوم الخروج والخصم من مبلغ التأمين، وتشرح كل بند بكلمات بسيطة مع سؤال تطرحه. تقرأ الإنجليزية والعربية البسيطة، ولا يغادر النص متصفحك.',
    'Contract type': 'نوع العقد',
    'Detect automatically': 'تحديد تلقائي',
    'Tenancy / lease': 'إيجار / تأجير',
    'Employment / job offer': 'عمل / عرض وظيفي',
    'Gym or club membership': 'عضوية نادٍ رياضي أو نادٍ',
    'Phone, internet or TV plan': 'باقة هاتف أو إنترنت أو تلفزيون',
    'Other service': 'خدمة أخرى',
    'Try a gym sample': 'جرّب نموذج عقد نادٍ رياضي (إنجليزي)',
    'Job offer sample': 'نموذج عرض عمل (إنجليزي)',
    "Paste the contract text here. Tip: on a PDF, select all and copy. For a photo, use your phone's 'copy text from image' feature first.":
      'الصق نص العقد هنا. نصيحة: في ملف PDF حدّد الكل وانسخه. وفي الصورة استخدم أولًا ميزة «نسخ النص من الصورة» في هاتفك.',
    'Check it': 'افحص العقد',
    'attention score / 100': 'درجة الانتباه من 100',
    'clauses flagged': 'بنود مُعلَّمة',
    'worth a hard look': 'تستحق تدقيقًا',
    'Your contract, marked up': 'عقدك مع العلامات',
    'Hard look': 'يستحق تدقيقًا',
    'Check this': 'تحقّق منه',
    'Good to know': 'للعلم',
    'What each flag means': 'معنى كل علامة',
    'Before you sign anything': 'قبل أن توقّع أي شيء',
    'How it works': 'طريقة العمل',
    "This is pattern matching, not a lawyer. It looks for a couple of hundred phrases in English and Arabic that usually sit inside the clauses below, then marks the whole sentence. It will miss clauses written in unusual words and can flag harmless ones. A clause being flagged doesn't make it unfair. It just means read it slowly.":
      'هذه مطابقة أنماط وليست محاميًا. تبحث الأداة عن نحو مئتي عبارة بالإنجليزية والعربية تَرِد عادةً في البنود أدناه، ثم تعلّم الجملة كاملة. قد تفوتها بنود مكتوبة بصياغة غير مألوفة، وقد تعلّم بنودًا لا ضرر فيها. وتعليم البند لا يعني أنه مجحف، بل يعني فقط أن تقرأه بتمهّل.',
    'The score adds up what was found, weighting exit fees, penalties and liability waivers more than ordinary notice terms. Most real contracts score somewhere in the middle. It is a reading aid, not legal advice. For anything large, ask the provider in writing or speak to a lawyer, and check the official rules for your emirate.':
      'تجمع الدرجة ما عُثر عليه، وتعطي رسوم الخروج والغرامات وإخلاء المسؤولية وزنًا أكبر من شروط الإشعار العادية. معظم العقود الحقيقية تحصل على درجة متوسطة. هذه أداة تساعدك على القراءة وليست استشارة قانونية. في الالتزامات الكبيرة، اسأل مقدّم الخدمة كتابيًا أو استشر محاميًا، وراجع الأنظمة الرسمية في إمارتك.',
    'Ask': 'اسأل',
    'Paste a bit more text, at least a few sentences.': 'الصق نصًا أطول قليلًا، بضع جمل على الأقل.',
    "Nothing from the list was found. That can mean a plain, fair contract, or wording this tool doesn't know. Still read it all.":
      'لم يُعثر على أي بند من القائمة. قد يعني ذلك عقدًا واضحًا ومنصفًا، أو صياغة لا تعرفها الأداة. اقرأه كاملًا على أي حال.',
    'Read it slowly before signing': 'اقرأه بتمهّل قبل التوقيع',
    'Several clauses can cost you money or lock you in. Ask the questions on the right, and get answers in writing.':
      'عدة بنود قد تكلّفك مالًا أو تقيّدك بالعقد. اطرح الأسئلة المرفقة بكل علامة، واحصل على الإجابات كتابيًا.',
    'A few things to check': 'بعض الأمور تستحق التحقق',
    'Fairly typical. Check the marked clauses, especially any in red.': 'عقد معتاد إلى حد ما. راجع البنود المعلَّمة، خصوصًا الحمراء منها.',
    'Looks fairly light': 'يبدو خفيفًا نسبيًا',
    'Few of the usual traps showed up. That is a good sign, but this tool only knows common wording.':
      'ظهر القليل من الفخاخ المعتادة. هذه علامة جيدة، لكن الأداة لا تعرف إلا الصياغات الشائعة.',

    // meanings
    'The contract carries on, and you keep paying, unless you cancel in time. People often miss the window and get locked in for another full term.':
      'يستمر العقد وتستمر في الدفع ما لم تُلغِه في الوقت المحدد. كثيرون يفوّتون المهلة فيجدون أنفسهم ملتزمين بمدة كاملة جديدة.',
    'How far ahead you or the other side must warn before ending or changing the contract. A long notice period ties you in, and a short one for the other side can leave you exposed.':
      'المدة التي يجب أن تُخطر فيها أنت أو الطرف الآخر قبل إنهاء العقد أو تعديله. مهلة الإشعار الطويلة تقيّدك، والقصيرة للطرف الآخر قد تتركك بلا حماية.',
    'What it costs to leave before the end. This is often the biggest hidden cost: some contracts ask for every remaining month at once.':
      'تكلفة الخروج قبل نهاية المدة. غالبًا ما تكون أكبر تكلفة خفية، فبعض العقود تطالب بكل الأشهر المتبقية دفعة واحدة.',
    'Extra money you owe if something goes wrong: paying late, a bounced cheque, damage, or breaking a rule. Check that amounts are fixed and reasonable, not "as determined by us".':
      'مبالغ إضافية تدفعها إذا حدث خطأ ما: تأخر في الدفع، أو شيك مرتجع، أو ضرر، أو مخالفة قاعدة. تأكد أن المبالغ محددة ومعقولة، لا «حسب ما نقرره».',
    'Money held back that you expect to get back. The question is what can be deducted from it, and who decides.':
      'مبلغ محجوز تتوقع استرداده. السؤال هو: ما الذي يمكن خصمه منه، ومن يقرر ذلك؟',
    'Lets the other side charge more later. Look for a cap, how much notice you get, and whether you can leave without a fee if the price goes up.':
      'يسمح للطرف الآخر برفع السعر لاحقًا. ابحث عن حد أقصى للزيادة، ومدة الإشعار التي تحصل عليها، وهل يمكنك الخروج دون رسوم إذا ارتفع السعر.',
    'The other side can change the deal after you sign, and you agreed to it in advance. Ask that changes need your consent or let you exit.':
      'يستطيع الطرف الآخر تغيير الاتفاق بعد توقيعك، وأنت موافق على ذلك مسبقًا. اطلب أن تحتاج التعديلات إلى موافقتك أو أن تتيح لك الخروج.',
    'Limits where you can work or who you can approach after you leave. In UAE employment, these generally need to be limited in time, place and type of work.':
      'يقيّد مكان عملك أو من يمكنك التواصل معه بعد مغادرتك. في عقود العمل في الإمارات، يجب عادةً أن يكون محدودًا بالمدة والمكان ونوع العمل.',
    'A trial period when either side can end the job with short notice. Under the UAE federal labour law it can be up to six months.':
      'فترة تجريبية يمكن خلالها لأي طرف إنهاء العمل بإشعار قصير. وفق قانون العمل الاتحادي في الإمارات، قد تصل إلى ستة أشهر.',
    'When you might not be paid, or when money comes out of your salary. Deductions from pay are tightly limited by UAE labour rules.':
      'الحالات التي قد لا تتقاضى فيها أجرًا، أو يُخصم فيها من راتبك. أنظمة العمل في الإمارات تقيّد الخصم من الأجر بشدة.',
    "Which country's or emirate's law applies and where a dispute would be heard. A foreign law or court can make it costly to complain.":
      'قانون أي دولة أو إمارة يُطبَّق، وأين يُنظر في النزاع. القانون أو المحكمة الأجنبية قد تجعل الشكوى مكلفة.',
    "You give up the right to claim, or promise to cover the other side's costs. In a gym that might mean injuries; in a lease, damage; in a service, data loss.":
      'تتنازل عن حقك في المطالبة، أو تتعهد بتغطية تكاليف الطرف الآخر. في النادي الرياضي قد يعني ذلك الإصابات، وفي الإيجار الأضرار، وفي الخدمات فقدان البيانات.',
    'When and how you can cancel, and whether you get money back. Some contracts allow a short cancellation window right after signing; outside it, refunds can vanish.':
      'متى وكيف يمكنك الإلغاء، وهل تسترد أموالك. بعض العقود تتيح مهلة إلغاء قصيرة بعد التوقيع مباشرة، وبعدها قد لا يكون هناك استرداد.',
    'Disputes go to a private arbitrator instead of a court. It can be faster, but fees can be high for an individual and appeals are very limited.':
      'تُحال النزاعات إلى محكّم خاص بدلًا من المحكمة. قد يكون ذلك أسرع، لكن الرسوم قد تكون مرتفعة على الفرد وفرص الطعن محدودة جدًا.',
    "An employer or landlord keeping your passport. In the UAE, employers are generally not allowed to keep an employee's passport against their will.":
      'احتفاظ صاحب العمل أو المؤجر بجواز سفرك. في الإمارات لا يُسمح عمومًا لأصحاب العمل بالاحتفاظ بجواز سفر الموظف دون رغبته.',
    'A cheque held "just in case". A blank or undated security cheque can be filled in and presented later, so ask exactly when it could be cashed and get it back at the end.':
      'شيك يُحتفظ به «للاحتياط». شيك الضمان على بياض أو غير المؤرخ يمكن تعبئته وتقديمه لاحقًا، فاسأل بالضبط متى يمكن صرفه، واسترده في النهاية.',

    // questions
    'How and by when exactly do I have to cancel to stop it renewing?': 'كيف ومتى بالضبط يجب أن ألغي لإيقاف التجديد؟',
    'Will you remind me before it renews?': 'هل ستذكّرونني قبل التجديد؟',
    'Does the price change on renewal?': 'هل يتغير السعر عند التجديد؟',
    'Is the notice period the same for both sides?': 'هل مهلة الإشعار متساوية للطرفين؟',
    'Does notice have to be in writing, by email, or through an app?': 'هل يجب أن يكون الإشعار كتابيًا، أو بالبريد الإلكتروني، أو عبر تطبيق؟',
    'When does the notice period start counting?': 'متى يبدأ احتساب مهلة الإشعار؟',
    'If I leave after month 3, what exactly would I pay, in dirhams?': 'إذا خرجت بعد الشهر الثالث، كم سأدفع بالضبط بالدرهم؟',
    'Can I transfer the contract to someone else instead?': 'هل يمكنني نقل العقد إلى شخص آخر بدلًا من ذلك؟',
    'Is there a fee waiver if I move abroad or lose my job?': 'هل تُلغى الرسوم إذا انتقلت إلى الخارج أو فقدت عملي؟',
    'What is the exact amount or formula for each fee?': 'ما المبلغ الدقيق لكل رسم أو طريقة احتسابه؟',
    'Is there a grace period before a late fee applies?': 'هل توجد مهلة سماح قبل فرض رسوم التأخير؟',
    'Is there a cap on total penalties?': 'هل يوجد حد أقصى لمجموع الغرامات؟',
    'What can be deducted, and will I get an itemised list with receipts?': 'ما الذي يمكن خصمه، وهل سأحصل على قائمة مفصّلة مع الإيصالات؟',
    'How many days after the end will the deposit be returned?': 'بعد كم يومًا من انتهاء العقد سيُعاد مبلغ التأمين؟',
    'Is normal wear and tear excluded from deductions?': 'هل الاستهلاك العادي مستثنى من الخصم؟',
    'Is there a maximum increase per year?': 'هل يوجد حد أقصى للزيادة السنوية؟',
    'How much notice do I get before a price change?': 'كم مدة الإشعار التي أحصل عليها قبل تغيير السعر؟',
    'Can I cancel free of charge if the price goes up?': 'هل يمكنني الإلغاء مجانًا إذا ارتفع السعر؟',
    'If you change the terms, can I leave without a fee?': 'إذا غيّرتم الشروط، هل يمكنني الخروج دون رسوم؟',
    'How will I be told about changes?': 'كيف سيتم إبلاغي بالتعديلات؟',
    'Which parts can you change, exactly?': 'ما الأجزاء التي يمكنكم تغييرها بالتحديد؟',
    'How long does it last, and in which places and job types?': 'كم مدته، وفي أي أماكن وأنواع وظائف؟',
    'Does it apply if I am let go during probation?': 'هل يسري إذا أُنهيت خدمتي خلال فترة التجربة؟',
    'Is there compensation while the restriction applies?': 'هل يوجد تعويض طوال مدة القيد؟',
    'How long is probation, and can it be extended?': 'كم مدة فترة التجربة، وهل يمكن تمديدها؟',
    'What notice applies during probation, for each side?': 'ما مهلة الإشعار خلال فترة التجربة لكل طرف؟',
    'Are any benefits paused until probation ends?': 'هل تُعلَّق أي مزايا حتى نهاية فترة التجربة؟',
    'In what cases can my salary be reduced or deducted?': 'في أي حالات يمكن تخفيض راتبي أو الخصم منه؟',
    'Is unpaid leave my choice, or can you place me on it?': 'هل الإجازة بدون راتب باختياري، أم يمكنكم فرضها علي؟',
    'Will deductions be shown on my payslip?': 'هل ستظهر الخصومات في قسيمة راتبي؟',
    'Is the law of the UAE, or the relevant free zone, the one that applies?': 'هل القانون المطبَّق هو قانون الإمارات أو المنطقة الحرة المعنية؟',
    'Where would a dispute be heard, and in which language?': 'أين سيُنظر في النزاع، وبأي لغة؟',
    'What exactly is excluded, and is there insurance that covers me instead?': 'ما المستثنى بالضبط، وهل يوجد تأمين يغطيني بدلًا من ذلك؟',
    'Does it still apply if the other side was negligent?': 'هل يسري حتى لو كان الطرف الآخر مهملًا؟',
    'Is there a cooling-off period, and how many days?': 'هل توجد مهلة للتراجع، وكم يومًا مدتها؟',
    'What is refunded if I cancel, and how fast?': 'ما الذي يُسترد إذا ألغيت، وخلال كم من الوقت؟',
    'Can I freeze instead of cancel if I travel or get injured?': 'هل يمكنني التجميد بدلًا من الإلغاء إذا سافرت أو أُصبت؟',
    'Who pays the arbitration fees?': 'من يدفع رسوم التحكيم؟',
    'Where is it held, and can small claims still go to court or a consumer body?': 'أين يُعقد التحكيم، وهل يمكن رفع المطالبات الصغيرة إلى المحكمة أو جهة حماية المستهلك؟',
    'Why do you need the original, and can you take a copy instead?': 'لماذا تحتاجون الأصل، وهل يمكنكم الاكتفاء بنسخة؟',
    'For what amount, and in what situation, could this cheque be presented?': 'بأي مبلغ وفي أي حالة يمكن تقديم هذا الشيك؟',
    'When will it be returned to me, and can I get that in writing?': 'متى سيُعاد إلي، وهل يمكنني الحصول على ذلك كتابيًا؟',

    // extras
    'It can be extended. Ask for the maximum total length in writing.': 'يمكن تمديدها. اطلب كتابيًا أقصى مدة إجمالية.',
    'This looks like you could owe the rest of the contract in one go. Work out that number before signing.': 'يبدو أنك قد تُلزَم بدفع باقي قيمة العقد دفعة واحدة. احسب هذا المبلغ قبل التوقيع.',
    'Part of the money is non-refundable. Ask for that amount to be written out separately.': 'جزء من المبلغ غير قابل للاسترداد. اطلب كتابة هذا المبلغ بشكل منفصل.',
    'The venue is outside the UAE. That can make any dispute very expensive for one person.': 'مكان التحكيم خارج الإمارات، وقد يجعل ذلك أي نزاع مكلفًا جدًا على الفرد.',
    'The increase is at their discretion with no cap mentioned.': 'الزيادة متروكة لتقديرهم دون ذكر أي حد أقصى.',
    'Set a calendar reminder a week before the cancellation deadline.': 'ضع تذكيرًا في تقويمك قبل أسبوع من آخر موعد للإلغاء.',

    // tips
    'Get the final version in writing, and keep a copy you can read later.': 'احصل على النسخة النهائية مكتوبة، واحتفظ بنسخة يمكنك الرجوع إليها.',
    'Ask for anything a salesperson promised to be added to the contract.': 'اطلب إضافة أي وعد قدّمه لك موظف المبيعات إلى العقد.',
    'Check the total cost over the full term, not the monthly price.': 'انظر إلى التكلفة الإجمالية طوال المدة، لا إلى السعر الشهري.',
    'Never sign blank pages, blank cheques, or forms with empty fields.': 'لا توقّع أبدًا صفحات فارغة أو شيكات على بياض أو نماذج فيها حقول فارغة.',
    "In Dubai, a landlord must give at least 90 days' written notice before the lease ends to raise the rent, and any increase is limited by the RERA rental index (Dubai rules as of 2026).":
      'في دبي، يجب على المؤجر إرسال إشعار كتابي قبل 90 يومًا على الأقل من انتهاء العقد لزيادة الإيجار، وأي زيادة محكومة بمؤشر الإيجارات الصادر عن مؤسسة التنظيم العقاري (RERA) (أنظمة دبي حتى 2026).',
    'Register the lease (Ejari in Dubai, Tawtheeq in Abu Dhabi). You need it for utilities, visas and disputes.':
      'سجّل عقد الإيجار (إيجاري في دبي، وتوثيق في أبوظبي). ستحتاجه لتوصيل الخدمات والتأشيرات والنزاعات.',
    'Ask who pays for maintenance, chiller or cooling fees, and the municipality housing fee.': 'اسأل من يدفع الصيانة ورسوم التبريد (التشيلر) ورسوم السكن البلدية.',
    'Take dated photos of every room on move-in day, to protect your deposit.': 'التقط صورًا مؤرخة لكل غرفة يوم الانتقال لحماية مبلغ التأمين.',
    'Other emirates have their own rules. Check the land or municipality department where the property is.': 'لكل إمارة أنظمتها. راجع دائرة الأراضي أو البلدية في الإمارة التي يقع فيها العقار.',
    'Under the UAE federal labour law (2021), probation is at most six months and fixed-term contracts became the norm (as of 2026).':
      'وفق قانون العمل الاتحادي في الإمارات (2021)، لا تتجاوز فترة التجربة ستة أشهر، وأصبحت العقود محددة المدة هي القاعدة (حتى 2026).',
    'Check that the offer letter matches the MOHRE contract you sign. The MOHRE one is what counts.': 'تأكد أن خطاب العرض يطابق عقد وزارة الموارد البشرية والتوطين الذي توقّعه، فعقد الوزارة هو المعتمد.',
    'Notice for ending an ongoing job is usually between 30 and 90 days. Look for what applies to you.': 'مهلة الإشعار لإنهاء العمل تتراوح عادةً بين 30 و90 يومًا. تحقق مما ينطبق عليك.',
    'Free zones like DIFC and ADGM have their own employment laws.': 'المناطق الحرة مثل مركز دبي المالي العالمي (DIFC) وسوق أبوظبي العالمي (ADGM) لها قوانين عمل خاصة.',
    'Your employer should not keep your passport against your will.': 'لا يحق لصاحب العمل الاحتفاظ بجواز سفرك دون رغبتك.',
    'Ask what happens if you move away, get injured, or the branch closes.': 'اسأل ماذا يحدث إذا انتقلت أو أُصبت أو أُغلق الفرع.',
    'Check whether the freeze option is free, and for how long.': 'تحقق هل خيار التجميد مجاني، ولأي مدة.',
    'Find the exact cancellation method: email, app, or in person with a form.': 'اعرف طريقة الإلغاء بالضبط: بريد إلكتروني، أو تطبيق، أو حضوريًا بنموذج.',
    'Check how long the commitment is if the plan includes a handset. The handset balance is often due if you leave early.': 'تحقق من مدة الالتزام إذا شملت الباقة جهازًا، فغالبًا ما يُطلب باقي ثمن الجهاز إذا خرجت مبكرًا.',
    'Ask what happens to the price after any promo months.': 'اسأل عن السعر بعد انتهاء أشهر العرض الترويجي.',
    'Check roaming and add-on charges, which often auto-renew too.': 'تحقق من رسوم التجوال والإضافات، فهي كثيرًا ما تتجدد تلقائيًا أيضًا.',
    "Ask what counts as the service being done, and what happens if it isn't.": 'اسأل متى تُعدّ الخدمة منجزة، وماذا يحدث إن لم تُنجز.',
    'Check who owns any work, files or data at the end.': 'تحقق من مالك الأعمال والملفات والبيانات في النهاية.',
    'Pay deposits in a traceable way and get a receipt.': 'ادفع العربون بطريقة يمكن تتبعها واحصل على إيصال.'
  };
  LabAr.add(d, [
    [/^(\d+)\. (.+)$/, function (m, i, t) { return T[t] ? i + '. ' + T[t] : m; }],
    [/^(Hard look|Check this|Good to know) · (\d+) places$/, function (m, s, k) { return SEV[s] + ' · ' + k + ' مواضع'; }],
    [/^This mentions (\S+) months\. The UAE federal labour law caps probation at six months\.( It can be extended\. Ask for the maximum total length in writing\.)?$/, function (m, a, b) {
      return 'يذكر العقد ' + n(a) + ' أشهر، بينما يحدد قانون العمل الاتحادي في الإمارات فترة التجربة بستة أشهر كحد أقصى.' + (b ? ' يمكن تمديدها. اطلب كتابيًا أقصى مدة إجمالية.' : '');
    }],
    [/^This says (\S+) years\. Under UAE federal labour law, a non-compete can last at most two years after the job ends\.$/, function (m, a) {
      return 'يذكر العقد ' + n(a) + ' سنوات، بينما لا يتجاوز شرط عدم المنافسة وفق قانون العمل الاتحادي في الإمارات سنتين بعد انتهاء العمل.';
    }],
    [/^Longest notice found is about (\d+) days\. Put a reminder in your calendar now\.$/, 'أطول مهلة إشعار وُجدت نحو $1 يومًا. ضع تذكيرًا في تقويمك الآن.'],
    [/^Read as an? (.+?)( \(detected\))?$/, function (m, k, det) { return 'قُرئ على أنه ' + (KIND[k] || k) + (det ? ' (تحديد تلقائي)' : ''); }],
    [/^(\d+) clause types? found in (\d+) sentences\.$/, function (m, a, b) { return 'أنواع البنود المكتشفة: ' + a + ' · عدد الجمل: ' + b; }],
    [/^Before you sign · (.+)$/, function (m, k) { return 'قبل أن توقّع · ' + (TIPK[k] || k); }]
  ]);
})();
