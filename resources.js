// ============================================================
// Columbia Gorge Resource Finder: the resource list
// To add a resource, copy a block below, paste it at the end of the
// list (before the final ]), and change the fields. See
// HOW-TO-ADD-A-RESOURCE.md. Keep the commas and quotes as they are.
// ============================================================

var SVC=[["mental","Mental health"],["dental","Dental"],["medical","Medical care"],["wellness","Health promotion"],["food","Food assistance"],["childcare","Child care"],["kidsprog","Kids & youth programs"],["classes","Classes & education"],["housing","Housing & bills"],["work","Jobs & training"],["legal","Legal help"],["recovery","Substance use & recovery"],["transport","Transportation"],["crisis","Crisis & safety"]];
var AGES=[["kids","Kids 0-12"],["teens","Teens 13-18"],["young","Young adults 19-39"],["adults","Adults 40-59"],["seniors","Seniors 60+"]];
var COUNTIES=["Hood River","Wasco","Klickitat"];
var AA=["kids","teens","young","adults","seniors"],AC=["Hood River","Wasco","Klickitat"],AD=["teens","young","adults","seniors"];
var KP=["kids","teens"],FAM=["kids","teens","young"],ADL=["young","adults","seniors"],ADT=["teens","young","adults","seniors"];

var RESOURCES=[
{
  n: "One Community Health",
  s: ["medical","dental","mental","wellness"],
  c: AC,
  a: AA,
  d: "Clinics in Hood River, The Dalles and White Salmon. Medical, dental (walk-in emergency dental), behavioral health, pharmacy and free exercise classes. Sliding scale; takes OHP and Apple Health. Veterans dental program available.",
  es: "Clínicas en Hood River, The Dalles y White Salmon. Atención médica, dental (dental de emergencia sin cita), salud conductual, farmacia y clases de ejercicio gratis. Tarifa según ingresos; acepta OHP y Apple Health. Programa dental para veteranos.",
  ph: "541-386-6380",
  u: "https://onecommunityhealth.org",
  det: [
    "Medical: primary care, pediatrics, newborn screening, sports physicals, vaccines",
    "Dental: regular care plus walk-in emergency dental (7am to 3pm) in Hood River and The Dalles",
    "Behavioral health counseling, and a pharmacy in The Dalles",
    "Farmworker services: special walk-in hours, urgent care, basic vision exams, mobile clinics",
    "Free Zumba, yoga and strength classes in English and Spanish",
    "Sliding scale for uninsured patients; Spanish interpretation"
  ]
},
{
  n: "Insurance sign-up help (One Community Health)",
  esn: "Ayuda para inscribirse en seguro (One Community Health)",
  s: ["medical"],
  c: AC,
  a: AA,
  d: "Free help applying for or renewing Oregon Health Plan, Washington Apple Health and marketplace plans, with English and Spanish advocates.",
  es: "Ayuda gratis para solicitar o renovar el Oregon Health Plan, Washington Apple Health y planes del mercado, con asesores en inglés y español.",
  ph: "541-386-6380",
  u: "https://onecommunityhealth.org",
  det: [
    "Free help applying for or renewing Oregon Health Plan or Washington Apple Health",
    "Bilingual English/Spanish patient care advocates",
    "Walk-in sessions have been held monthly in each town; call to confirm"
  ]
},
{
  n: "Advantage Dental+ (The Dalles)",
  s: ["dental"],
  c: ["Wasco"],
  a: AA,
  d: "General and family dental care, 1025 Vey Way. Accepts most insurance including Oregon Health Plan.",
  es: "Atención dental general y familiar en 1025 Vey Way. Acepta Oregon Health Plan y la mayoría de los seguros.",
  u: "https://www.advantagedental.com/the-dalles",
  det: [
    "Preventive and general dental care",
    "Orthodontics offered in house",
    "Takes Oregon Health Plan and most insurance"
  ]
},
{
  n: "NorthShore Medical Group (White Salmon)",
  s: ["medical","mental","dental"],
  c: ["Klickitat"],
  a: AA,
  d: "Primary care and behavioral health in White Salmon. Partners with One Community Health to expand dental care for Apple Health and uninsured patients.",
  es: "Atención primaria y salud conductual en White Salmon. Se asocia con One Community Health para ampliar la atención dental para pacientes con Apple Health o sin seguro.",
  ph: "509-493-2133",
  u: "https://northshore-medical.com",
  det: [
    "Primary care and behavioral health",
    "Offices in White Salmon and Stevenson",
    "Dental partnership with One Community Health for Apple Health and uninsured patients in western Klickitat"
  ]
},
{
  n: "Klickitat County Public Health",
  s: ["wellness","dental","medical"],
  c: ["Klickitat"],
  a: AA,
  d: "Goldendale and White Salmon offices. Child dental referral for Apple Health kids from birth to 6, family planning (sliding scale) and more.",
  es: "Oficinas en Goldendale y White Salmon. Referencia dental para niños de 0 a 6 años con Apple Health, planificación familiar (tarifa según ingresos) y más.",
  u: "https://klickitatcounty.gov",
  det: [
    "Child dental referral: kids birth to 6 on Apple Health, free; call for a referral (Goldendale)",
    "Family planning in White Salmon (501 NE Washington St), sliding scale, takes Apple Health",
    "Weekday hours; call to confirm"
  ]
},
{
  n: "Klickitat Valley Health (Goldendale)",
  s: ["medical","mental"],
  c: ["Klickitat"],
  a: AA,
  d: "Hospital and family medicine clinic with behavioral health services. Accepts Apple Health and offers a sliding scale. Phone shown is behavioral health.",
  es: "Hospital y clínica de medicina familiar con salud conductual. Acepta Apple Health y ofrece tarifa según ingresos. El teléfono es de salud conductual.",
  ph: "509-773-4017",
  u: "https://www.kvhealth.net",
  det: [
    "Family medicine clinic, 317 Sanders Way (weekdays 7:30am to 5:30pm)",
    "Behavioral health services and emergency care",
    "Accepts Apple Health, Medicare, private insurance; sliding scale"
  ]
},
{
  n: "Skyline Health (White Salmon)",
  s: ["medical","mental"],
  c: ["Klickitat"],
  a: AA,
  d: "Hospital, family medicine clinic and behavioral health. Phone shown is behavioral health.",
  es: "Hospital, clínica de medicina familiar y salud conductual. El teléfono es de salud conductual.",
  ph: "509-493-1101",
  u: "https://myskylinehealth.org",
  det: [
    "Emergency room and outpatient clinics",
    "Family medicine clinic with sliding scale fees",
    "Behavioral health services"
  ]
},
{
  n: "Providence Hood River Memorial Hospital",
  s: ["medical"],
  c: ["Hood River"],
  a: AA,
  d: "Hospital and clinic care in Hood River.",
  es: "Hospital y atención clínica en Hood River.",
  u: "https://providence.org"
},
{
  n: "Mid-Columbia Center for Living",
  s: ["mental","crisis"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "The county mental health and addiction agency. Counseling for kids, teens and adults; drop-in at 1060 Webber St, The Dalles. Hood River office: 541-386-2620.",
  es: "La agencia del condado para salud mental y adicciones. Consejería para niños, adolescentes y adultos; atención sin cita en 1060 Webber St, The Dalles. Oficina de Hood River: 541-386-2620.",
  ph: "541-296-5452",
  u: "https://mccfl.org",
  det: [
    "Individual and group counseling, including adolescent and youth counseling",
    "Mental health evaluations and psychiatric case management",
    "Addiction services center in Hood River",
    "Early intervention for mental illness (Early Assessment and Support Alliance)",
    "Mobile crisis and drop-in hours (weekdays); English and Spanish",
    "Bring insurance info, or proof of income for sliding scale"
  ]
},
{
  n: "Mental health crisis line (Hood River & Wasco)",
  esn: "Línea de crisis de salud mental (Hood River y Wasco)",
  s: ["crisis","mental"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "24-hour crisis line run by Mid-Columbia Center for Living.",
  es: "Línea de crisis las 24 horas de Mid-Columbia Center for Living.",
  ph: "888-877-9147",
  det: [
    "For suicidal thoughts, mental health crises or other emergencies",
    "Open 24 hours a day, every day",
    "Weekday local numbers: 541-296-6307 (Wasco)"
  ]
},
{
  n: "Klickitat County mental health & crisis options",
  esn: "Salud mental y crisis en el condado de Klickitat",
  s: ["mental","crisis"],
  c: ["Klickitat"],
  a: AA,
  d: "The county keeps a list of local counselors and treatment providers. County behavioral health provides 24/7 crisis response. Call 988 in a crisis.",
  es: "El condado mantiene una lista de consejeros y proveedores locales. Salud conductual del condado ofrece respuesta de crisis 24/7. En una crisis, llame al 988.",
  u: "https://klickitatcounty.gov/1093/Crisis-Help",
  det: [
    "County list covers Klickitat Valley Health, NorthShore and Skyline behavioral health plus private counselors in White Salmon",
    "Some providers take state insurance; ask when you call"
  ]
},
{
  n: "Programs for Peaceful Living",
  s: ["crisis"],
  c: ["Klickitat"],
  a: ADT,
  d: "24/7 support for victims of domestic violence, sexual assault and other crime. Goldendale 509-773-6100, White Salmon 509-493-1533.",
  es: "Apoyo 24/7 para víctimas de violencia doméstica, agresión sexual y otros delitos. Goldendale 509-773-6100, White Salmon 509-493-1533.",
  ph: "844-493-1709",
  det: [
    "24/7 crisis line for domestic violence, sexual assault and other crime victims",
    "Advocacy and support services",
    "Offices in Goldendale and White Salmon"
  ]
},
{
  n: "HAVEN from Domestic and Sexual Violence",
  s: ["crisis","mental"],
  c: ["Hood River"],
  a: ADT,
  d: "Support for people experiencing domestic or sexual violence.",
  es: "Apoyo para personas que sufren violencia doméstica o sexual.",
  find: 1
},
{
  n: "Hood River County Health Department",
  s: ["wellness","medical"],
  c: ["Hood River"],
  a: AA,
  d: "Immunizations, WIC nutrition support, sexual and reproductive health, nurse home visits and public health programs.",
  es: "Vacunas, apoyo nutricional WIC, salud sexual y reproductiva, visitas de enfermeras a domicilio y programas de salud pública.",
  u: "https://www.hoodrivercounty.gov",
  det: [
    "Immunizations",
    "Sexual and reproductive health: wellness exams, cancer screening, birth control, pregnancy tests, free condoms",
    "WIC nutrition support",
    "Nurse home visits for families and Babies First"
  ]
},
{
  n: "North Central Public Health District",
  s: ["wellness","medical"],
  c: ["Wasco"],
  a: AA,
  d: "419 E 7th St, The Dalles. Immunizations, WIC (541-506-2610), family planning, Babies First and health education.",
  es: "419 E 7th St, The Dalles. Vacunas, WIC (541-506-2610), planificación familiar, Babies First y educación en salud.",
  ph: "541-506-2600",
  u: "https://ncphd.org",
  det: [
    "Immunizations and TB screening",
    "WIC for pregnancy through age 5, including breastfeeding support",
    "Family planning and reproductive health",
    "Babies First, maternity case management, and CaCoon for kids 0 to 21 with disabilities or chronic conditions"
  ]
},
{
  n: "Gorge Grown Food Network",
  s: ["food","wellness"],
  c: AC,
  a: AA,
  d: "Local food access and healthy-eating programs around the Gorge.",
  es: "Acceso a alimentos locales y programas de alimentación saludable en la región.",
  u: "https://gorgegrown.com"
},
{
  n: "Columbia Gorge Food Bank",
  s: ["food"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "Regional food bank supplying pantries across Hood River and Wasco counties. Call to find the pantry closest to you.",
  es: "Banco de alimentos regional que abastece despensas en Hood River y Wasco. Llame para encontrar la más cercana.",
  ph: "541-370-2333",
  u: "https://oregonfoodbank.org/cgfb",
  det: [
    "Supplies about 17 public pantry sites in the region",
    "Community backpack program in The Dalles",
    "Migrant farmworker distributions"
  ]
},
{
  n: "Oregon Food Finder",
  esn: "Buscador de comida de Oregon",
  s: ["food"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "Search free groceries, meals and SNAP double-up sites near any address.",
  es: "Busque comida gratis, comidas y lugares para duplicar SNAP cerca de cualquier dirección.",
  u: "https://foodfinder.oregonfoodbank.org",
  det: [
    "Search free groceries and meals by address",
    "Find places to double SNAP benefits"
  ]
},
{
  n: "FISH Food Bank (Hood River)",
  s: ["food"],
  c: ["Hood River"],
  a: AA,
  d: "Food pantry at 1130 Tucker Rd, open several days a week. Call for current hours.",
  es: "Despensa en 1130 Tucker Rd, abierta varios días a la semana. Llame para confirmar el horario.",
  ph: "541-386-3474",
  find: 1,
  det: [
    "Food pantry at 1130 Tucker Rd",
    "Listed hours: Monday afternoon, Wednesday morning and afternoon, Friday afternoon"
  ]
},
{
  n: "Hood River Adventist food pantry",
  esn: "Despensa adventista de Hood River",
  s: ["food"],
  c: ["Hood River"],
  a: AA,
  d: "Neighborhood pantry on 22nd Street; listed hours are Tuesday mornings. Confirm before you go.",
  es: "Despensa de barrio en la calle 22; según los listados abre los martes por la mañana. Confirme antes de ir.",
  find: 1,
  det: [
    "Listed hours: Tuesday mornings (about 9:30 to 11:30)"
  ]
},
{
  n: "St. Vincent de Paul (The Dalles)",
  s: ["food"],
  c: ["Wasco"],
  a: AA,
  d: "Food pantry and meals at 315 W 3rd St. Call for current hours.",
  es: "Despensa y comidas en 315 W 3rd St. Llame para confirmar el horario.",
  ph: "541-296-9566",
  u: "https://svdpthedalles.org",
  det: [
    "Food pantry",
    "Meals served at 315 W 3rd St on a weekday schedule"
  ]
},
{
  n: "Wahtonka Food Pantry (The Dalles)",
  s: ["food"],
  c: ["Wasco"],
  a: AA,
  d: "3601 W 10th St. Listed hours are the 2nd and 4th Thursday, 4 to 6 pm. No documents required.",
  es: "3601 W 10th St. Según los listados, abre el 2.º y 4.º jueves, de 4 a 6 pm. No piden documentos.",
  ph: "541-370-2333",
  det: [
    "Open 2nd and 4th Thursday, 4 to 6 pm",
    "No documents required"
  ]
},
{
  n: "CGCC campus food pantry",
  esn: "Despensa del campus de CGCC",
  s: ["food"],
  c: ["Hood River","Wasco"],
  a: ["teens","young","adults"],
  d: "Food pantry for the college community. Email campuspantry@cgcc.edu.",
  es: "Despensa para la comunidad del colegio. Escriba a campuspantry@cgcc.edu.",
  ph: "541-506-6013",
  u: "https://www.cgcc.edu/pantry"
},
{
  n: "Hood River Valley Adult Center",
  s: ["food"],
  c: ["Hood River"],
  a: ["seniors"],
  d: "Weekday senior lunches, 2010 Sterling Place.",
  es: "Almuerzos para mayores entre semana, 2010 Sterling Place.",
  ph: "541-386-2060",
  find: 1,
  det: [
    "Weekday hot lunch and Meals on Wheels",
    "Medical equipment loan closet",
    "Thrift shop and art club"
  ]
},
{
  n: "Goldendale Community Food Bank",
  s: ["food"],
  c: ["Klickitat"],
  a: AA,
  d: "Community food bank in Goldendale. Call for hours.",
  es: "Banco de alimentos comunitario en Goldendale. Llame para el horario.",
  ph: "509-773-5750",
  find: 1
},
{
  n: "Lyle Good Food Pantry",
  s: ["food"],
  c: ["Klickitat"],
  a: AA,
  d: "Pantry at 308 Klickitat St, Lyle.",
  es: "Despensa en 308 Klickitat St, Lyle.",
  find: 1
},
{
  n: "Washington Gorge Action Programs (WAGAP)",
  s: ["food","housing"],
  c: ["Klickitat"],
  a: AA,
  d: "Community action agency in Bingen, Goldendale and Stevenson. Monthly food boxes for low-income households, rent and energy assistance, shelter.",
  es: "Agencia de acción comunitaria en Bingen, Goldendale y Stevenson. Cajas de comida mensuales para hogares de bajos ingresos, ayuda con renta y energía, refugio.",
  ph: "800-755-1192",
  u: "https://wagap.org",
  det: [
    "Food: a food box once a month for low-income households, plus a mobile food bank",
    "Rent help for households facing eviction, and emergency shelter in Bingen",
    "Energy bill help and weatherization for eligible households",
    "Supportive housing, and rapid re-housing for youth 18 to 24 and families with children",
    "Housing and Essential Needs help for people approved by DSHS",
    "Programs for Peaceful Living (crime victim services)"
  ]
},
{
  n: "Mid-Columbia Children’s Council Head Start",
  s: ["childcare","kidsprog"],
  c: AC,
  a: ["kids"],
  d: "Free Head Start preschool (ages 3 to 5) and Early Head Start (pregnancy to age 3) for income-eligible families. Sites include Hood River, White Salmon and Goldendale.",
  es: "Head Start gratis (preescolar de 3 a 5 años) y Early Head Start (embarazo hasta los 3 años) para familias que califican. Sitios en Hood River, White Salmon y Goldendale.",
  ph: "541-386-2010",
  find: 1,
  det: [
    "Head Start: preschool for ages 3 to 5",
    "Early Head Start: home visiting from pregnancy to age 3",
    "Free; bring proof of age, family size and income",
    "Bilingual (English/Spanish)"
  ]
},
{
  n: "Child Care Partners (CGCC)",
  esn: "Child Care Partners (CGCC): referencias de cuidado infantil",
  s: ["childcare"],
  c: ["Hood River","Wasco"],
  a: ["kids"],
  d: "Child care resource and referral. Helps families find child care, and ask about assistance.",
  es: "Referencias de cuidado infantil. Ayuda a las familias a encontrar cuidado y a preguntar por asistencia.",
  find: 1,
  det: [
    "Helps families find licensed child care",
    "Supports local child care providers",
    "Infant and toddler openings are limited, so start early"
  ]
},
{
  n: "Four Rivers Early Learning & Parenting Hub",
  s: ["childcare","kidsprog"],
  c: ["Hood River","Wasco"],
  a: ["kids","young"],
  d: "Free parenting classes and groups, preschool placement help and Preschool Promise enrollment support.",
  es: "Clases y grupos gratis para padres, ayuda para encontrar preescolar e inscripción en Preschool Promise.",
  find: 1,
  det: [
    "Parent support classes and groups",
    "Preschool Promise enrollment support and preschool placement help",
    "Parenting tips by text and Play and Learn at home"
  ]
},
{
  n: "Oregon Child Development Coalition",
  s: ["childcare","kidsprog"],
  c: ["Hood River","Wasco"],
  a: ["kids"],
  d: "Migrant and Seasonal Head Start and Early Head Start for farmworker families.",
  es: "Head Start y Early Head Start para familias migrantes y trabajadoras agrícolas de temporada.",
  u: "https://ocdc.net"
},
{
  n: "Child Care Aware of Washington",
  s: ["childcare"],
  c: ["Klickitat"],
  a: ["kids","young"],
  d: "Free help finding child care and learning about assistance in Washington.",
  es: "Ayuda gratis para encontrar cuidado infantil y conocer la asistencia en Washington.",
  ph: "800-446-1114",
  u: "https://childcareawarewa.org"
},
{
  n: "Next Door, Inc.",
  s: ["kidsprog","wellness"],
  c: ["Hood River","Wasco"],
  a: FAM,
  d: "Healthy Families home visiting for pregnant and new parents, play groups, youth mentoring and a youth shelter (ages 10 to 17).",
  es: "Visitas a domicilio de Healthy Families para padres embarazados y nuevos, grupos de juego, mentoría juvenil y un refugio para jóvenes (10 a 17 años).",
  ph: "541-296-8118",
  u: "https://nextdoorinc.org",
  det: [
    "Healthy Families Oregon: home visiting for pregnant and new parents",
    "Welcome Baby for all expectant families; open play groups",
    "Youth outreach in schools, life skills and mentoring",
    "Help for teens leaving foster care; Youth Empowerment Shelter (ages 10 to 17, guardian consent)"
  ]
},
{
  n: "Hood River Valley Parks + Recreation",
  s: ["kidsprog","wellness"],
  c: ["Hood River"],
  a: ["kids","teens","young","adults"],
  d: "Swim lessons, youth sports, camps, art classes and adult recreation.",
  es: "Clases de natación, deportes juveniles, campamentos, arte y recreación para adultos.",
  u: "https://hoodriverparksandrec.org",
  det: [
    "Swim lessons at the Aquatic Center (1601 May St)",
    "Youth sports, clinics and summer camps",
    "Art and outdoor activities; adult recreation too"
  ]
},
{
  n: "Hood River County Library District",
  s: ["kidsprog","classes"],
  c: ["Hood River"],
  a: AA,
  d: "Story times, teen programs and community classes.",
  es: "Cuentos, programas para adolescentes y clases comunitarias.",
  u: "https://hoodriverlibrary.org",
  det: [
    "Story times and summer reading",
    "Teen programs and games",
    "Free community programs"
  ]
},
{
  n: "Wasco County Public Library",
  s: ["kidsprog","classes"],
  c: ["Wasco"],
  a: AA,
  d: "Library programs for kids, teens and adults.",
  es: "Programas de biblioteca para niños, adolescentes y adultos.",
  find: 1
},
{
  n: "Columbia Gorge ESD youth STEM programs",
  s: ["kidsprog"],
  c: ["Hood River","Wasco"],
  a: KP,
  d: "After-school, summer and robotics programs in local schools and libraries.",
  es: "Programas extraescolares, de verano y de robótica en escuelas y bibliotecas locales.",
  u: "https://cgesd.k12.or.us",
  det: [
    "Robotics clubs and maker programs",
    "After-school, summer and robotics camps",
    "Garden and arts clubs with community partners"
  ]
},
{
  n: "CGCC Homebuyer Education",
  esn: "CGCC: educación para compradores de casa",
  s: ["classes","housing"],
  c: AC,
  a: ADL,
  d: "First-time homebuyer class (about $35 at last listing) in The Dalles, Hood River and on Zoom, in English and Spanish. Scholarships through Columbia Cascade Housing Corp.",
  es: "Clase para quienes compran casa por primera vez (unos $35 en el último listado) en The Dalles, Hood River y por Zoom, en inglés y español. Becas por medio de Columbia Cascade Housing Corp.",
  ph: "541-506-6011",
  u: "https://cgcc.coursestorm.com/category/real-estate",
  det: [
    "First-time homebuyer basics: the buying process and lingo",
    "Saturday 9am to 3pm in The Dalles and Hood River, or on Zoom",
    "Taught by Columbia Cascade Housing Corp; English and Spanish",
    "Fee covers up to two people; scholarships available at 541-296-3397"
  ]
},
{
  n: "Columbia Gorge Community College",
  s: ["classes"],
  c: ["Hood River","Wasco"],
  a: ADT,
  d: "Credit classes, workforce training and community education at campuses in Hood River and The Dalles.",
  es: "Clases con crédito, capacitación laboral y educación comunitaria en los campus de Hood River y The Dalles.",
  ph: "541-506-6011",
  u: "https://cgcc.edu",
  det: [
    "Transfer degrees and career training",
    "Programs include viticulture, hospitality and medical fields",
    "Non-credit workshops; campuses in The Dalles, Hood River and Cascade Locks"
  ]
},
{
  n: "CGCC free GED & ESOL classes",
  esn: "CGCC: clases gratis de GED e inglés (ESOL)",
  s: ["classes"],
  c: ["Hood River","Wasco"],
  a: ADT,
  d: "Free GED prep and English classes (ages 16 and up), plus the Youth Compass program. ESOL: 541-506-6040.",
  es: "Clases gratis de GED e inglés (desde los 16 años) y el programa Youth Compass. ESOL: 541-506-6040.",
  u: "https://ged.cgcc.edu",
  det: [
    "Free GED and pre-college classes",
    "Free English classes for ages 16 and up; placement test and free online English app",
    "Youth Compass and Adult and Dislocated Worker programs",
    "GED testing scholarships and an 8-credit tuition waiver"
  ]
},
{
  n: "Columbia Cascade Housing Corp",
  s: ["housing","classes"],
  c: ["Hood River","Wasco"],
  a: ADL,
  d: "Housing programs and homebuyer education, including class scholarships.",
  es: "Programas de vivienda y educación para compradores de casa, con becas para las clases.",
  ph: "541-296-3397",
  u: "https://columbiacascadehousingcorp.org",
  det: [
    "Homebuyer education (offered since 2008)",
    "Classes in English and Spanish, on Zoom through CGCC",
    "Class scholarships"
  ]
},
{
  n: "Mid-Columbia Community Action Council",
  s: ["housing"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "Rent help, eviction prevention, energy bill assistance and shelter. Gloria Center, 2505 W 7th St, The Dalles; Hood River office at 606 State St.",
  es: "Ayuda con renta, prevención de desalojo, facturas de energía y refugio. Gloria Center, 2505 W 7th St, The Dalles; oficina en Hood River, 606 State St.",
  ph: "541-298-5131",
  u: "https://mccac.com",
  det: [
    "Rent help and eviction prevention",
    "Energy and utility bill assistance",
    "Shelter and veterans housing help",
    "Gloria Center also hosts counseling, DHS and community health workers",
    "Does not currently offer weatherization"
  ]
},
{
  n: "Mid-Columbia Housing Authority",
  s: ["housing"],
  c: ["Hood River","Wasco"],
  a: ADL,
  d: "Rental assistance and housing vouchers.",
  es: "Ayuda con la renta y vales de vivienda.",
  find: 1,
  det: [
    "Housing vouchers",
    "Tenant-based rental assistance"
  ]
},
{
  n: "Columbia Area Transit (CAT)",
  s: ["transport"],
  c: ["Hood River"],
  a: AA,
  d: "Hood River buses, Dial-A-Ride and the Columbia Gorge Express to Portland. Ask about the low-income pass program.",
  es: "Autobuses en Hood River, Dial-A-Ride y el Columbia Gorge Express a Portland. Pregunte por el programa de pases para bajos ingresos.",
  ph: "541-386-4202",
  u: "https://ridecatbus.org",
  det: [
    "Hood River city bus (7 days), Upper Valley route and Dial-A-Ride",
    "Columbia Gorge Express to Portland; winter Gorge-to-Mountain Express",
    "By-reservation medical shuttle to Portland ($20 each way when announced)",
    "Low-income pass program; apply at 224 Wasco Loop",
    "Mobile tickets on the Token Transit app"
  ]
},
{
  n: "The Link Public Transit",
  s: ["transport"],
  c: ["Wasco"],
  a: AA,
  d: "Buses and shuttles in The Dalles and Wasco County.",
  es: "Autobuses y transporte en The Dalles y el condado de Wasco.",
  u: "https://gorgetranslink.com",
  det: [
    "Fixed routes in The Dalles",
    "Shopping and South County shuttles; Dial-A-Ride",
    "Accepts the GOrge Pass"
  ]
},
{
  n: "Mt. Adams Transportation Service (MATS)",
  s: ["transport"],
  c: ["Klickitat"],
  a: AA,
  d: "Dial-a-ride and bus routes in Klickitat County, with trips to The Dalles and Hood River.",
  es: "Transporte a pedido y rutas de autobús en el condado de Klickitat, con viajes a The Dalles y Hood River.",
  u: "https://gorgetranslink.com",
  det: [
    "Fixed routes and dial-a-ride in Klickitat County",
    "Runs between Hood River and Bingen/White Salmon",
    "Door-through-door help for appointments; call to arrange"
  ]
},
{
  n: "GOrge Pass",
  esn: "Pase GOrge",
  s: ["transport"],
  c: AC,
  a: AA,
  d: "Annual pass for unlimited rides on CAT, The Link, MATS and Skamania transit. Check the site for the current price.",
  es: "Pase anual para viajes ilimitados en CAT, The Link, MATS y Skamania. Consulte el precio actual.",
  u: "https://gorgetranslink.com",
  det: [
    "Unlimited fixed-route rides in four counties and to Portland",
    "$40 for adults at last listing",
    "Can be stored in the Token Transit app"
  ]
},
{
  n: "GoVets Columbia Gorge Program",
  s: ["transport"],
  c: ["Hood River","Wasco"],
  a: ADL,
  d: "Help for veterans getting started with Gorge transit.",
  es: "Ayuda para veteranos que empiezan a usar el transporte del Gorge.",
  ph: "541-386-4202",
  u: "https://ridecatbus.org/govets-columbia-gorge-program",
  det: [
    "Orientation to Dial-A-Ride, the GOrge Pass and Wasco shuttles",
    "Contact CAT or your local Veterans Service Office"
  ]
},
{
  n: "211 (Oregon & Washington)",
  s: ["food","housing","childcare","mental","crisis"],
  c: AC,
  a: AA,
  d: "Dial 211 for child care referrals, food, housing, utilities and other local help.",
  es: "Marque 211 para cuidado infantil, comida, vivienda, servicios públicos y otra ayuda local.",
  ph: "211",
  u: "https://211info.org"
},
{
  n: "988 Suicide & Crisis Lifeline",
  s: ["crisis","mental"],
  c: AC,
  a: AA,
  d: "Call or text 988 any time for free, confidential support.",
  es: "Llame o envíe un mensaje al 988 a cualquier hora para apoyo gratis y confidencial.",
  ph: "988",
  u: "https://988lifeline.org"
},
{
  n: "Columbia Gorge Junior Kayak Club",
  s: ["kidsprog","wellness"],
  c: ["Hood River","Klickitat"],
  a: ["kids","teens","young","adults"],
  d: "Nonprofit that makes whitewater kayaking accessible to local youth. Based in Hood River with paddles on the White Salmon River and Trout Lake area.",
  es: "Organización sin fines de lucro que acerca el kayak de aguas bravas a los jóvenes locales. Sede en Hood River, con salidas en el río White Salmon y Trout Lake.",
  u: "https://www.zeffy.com/organizations/columbia-gorge-junior-kayak-club",
  det: [
    "Pool sessions at the Hood River Aquatic Center",
    "Weekly paddles and flatwater practice",
    "Gear rental program to lower the cost",
    "Multi-day beginner progressions and all-ages paddle nights",
    "Family rafting day; check the schedule, it changes by season"
  ]
},
{
  n: "Gorge Junior Sailing",
  s: ["kidsprog","wellness"],
  c: ["Hood River"],
  a: ["kids","teens","young","adults"],
  d: "Youth sailing program on the Columbia River in Hood River.",
  es: "Programa juvenil de vela en el río Columbia, en Hood River.",
  find: 1,
  det: [
    "Summer learn-to-sail classes for ages 5 to 18, all skill levels",
    "Free weekly evening Open Sail for anyone"
  ]
},
{
  n: "Diversify Whitewater kayak program",
  s: ["wellness","classes"],
  c: ["Hood River","Klickitat"],
  a: ["young","adults"],
  d: "Free multi-week whitewater kayak progression program for Gorge residents. It has run in recent summers.",
  es: "Programa gratis de varias semanas de kayak de aguas bravas para residentes del Gorge. Se ha ofrecido en veranos recientes.",
  find: 1,
  det: [
    "No experience or gear needed; instruction is free",
    "Applications have opened each spring; check for this year"
  ]
},
{
  n: "WorkSource Oregon (The Dalles & Hood River)",
  s: ["work","classes"],
  c: ["Hood River","Wasco"],
  a: ADT,
  d: "Free job search help, career coaching and training funds. Offices at 700 Union St in The Dalles and on the CGCC Hood River campus.",
  es: "Ayuda gratis para buscar empleo, orientación profesional y fondos de capacitación. Oficinas en 700 Union St, The Dalles, y en el campus de CGCC en Hood River.",
  ph: "541-296-5435",
  u: "https://worksourceoregon.org",
  det: [
    "Job search help, resumes, interviewing and 1:1 career coaching",
    "Training funds and career advisors through CGCC (adult and dislocated worker program)",
    "On-the-job training with local employers; unemployment help",
    "The Dalles 541-296-5435; Hood River 541-386-6300"
  ]
},
{
  n: "Oregon Human Development Corporation (farmworker jobs)",
  s: ["work"],
  c: ["Hood River","Wasco"],
  a: ADL,
  d: "Employment and training help for seasonal and migrant farmworkers. Hood River office at 1100 E Marina Way, Suite 102.",
  es: "Ayuda de empleo y capacitación para trabajadores agrícolas migrantes y de temporada. Oficina en Hood River: 1100 E Marina Way, Suite 102.",
  find: 1,
  det: [
    "Employment and training for seasonal or migrant farmworkers",
    "Classes, training and financial help vary by funding"
  ]
},
{
  n: "Oregon Law Center (at One Community Health)",
  s: ["legal"],
  c: ["Hood River","Wasco"],
  a: ADT,
  d: "Free civil legal help for people with low incomes, offered through One Community Health. Not for criminal cases. English and Spanish.",
  es: "Ayuda legal civil gratis para personas de bajos ingresos, por medio de One Community Health. No es para casos penales. Inglés y español.",
  ph: "541-386-6380",
  u: "https://oregonlawcenter.org",
  det: [
    "Housing, employment (unpaid wages, discrimination, unsafe work), public benefits, debt and domestic violence matters",
    "Immigration-related help in some cases",
    "Schedule through One Community Health: 541-386-6380"
  ]
},
{
  n: "Immigration Counseling Service (Hood River)",
  s: ["legal"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "Low-cost immigration legal services by appointment, 1100 E Marina Way, Suite 228.",
  es: "Servicios legales de inmigración a bajo costo con cita, 1100 E Marina Way, Suite 228.",
  ph: "541-399-8029",
  u: "https://www.ics-law.org",
  det: [
    "Immigration legal services for low-income clients",
    "Serves the Gorge, including The Dalles",
    "By appointment; apply online or call"
  ]
},
{
  n: "Northwest Justice Project",
  s: ["legal"],
  c: ["Klickitat"],
  a: AA,
  d: "Free civil legal help for eligible low-income Washington residents. The Vancouver office serves Klickitat County.",
  es: "Ayuda legal civil gratis para residentes de bajos ingresos de Washington. La oficina de Vancouver atiende el condado de Klickitat.",
  u: "https://nwjustice.org",
  det: [
    "Legal advice, self-help materials, limited services and representation",
    "Housing, family safety, income, health care, education"
  ]
},
{
  n: "Mid-Columbia Senior Center (The Dalles)",
  s: ["wellness","food"],
  c: ["Wasco"],
  a: ["seniors"],
  d: "1112 W 9th St. Weekday lunches, a medical equipment loan closet and activities for older adults.",
  es: "1112 W 9th St. Almuerzos entre semana, préstamo de equipo médico y actividades para mayores.",
  ph: "541-296-4788",
  u: "https://www.midcolumbiaseniorcenter.com",
  det: [
    "Weekday lunch for ages 60 and over (donation)",
    "Medical equipment loan closet",
    "Tech classes, bingo and a thrift shop that supports the center"
  ]
},
{
  n: "Meals on Wheels (The Dalles)",
  esn: "Comidas a domicilio (The Dalles)",
  s: ["food"],
  c: ["Wasco"],
  a: ["seniors"],
  d: "Home-delivered meals for people who have trouble getting out, or a noon meal at the senior center.",
  es: "Comidas a domicilio para quienes tienen dificultad para salir, o comida al mediodía en el centro para mayores.",
  ph: "541-298-8333",
  find: 1,
  det: [
    "Call before 10:30am to arrange a noon meal pickup at the senior center",
    "Home delivery for people who struggle to leave home"
  ]
},
{
  n: "Klickitat County Senior Services",
  esn: "Servicios para mayores del condado de Klickitat",
  s: ["food","wellness"],
  c: ["Klickitat"],
  a: ["seniors"],
  d: "Information, support and home-delivered meals for older adults. Goldendale 509-773-3757; White Salmon 509-493-3068.",
  es: "Información, apoyo y comidas a domicilio para adultos mayores. Goldendale 509-773-3757; White Salmon 509-493-3068.",
  ph: "800-447-7858",
  find: 1,
  det: [
    "Home-delivered meals",
    "Phone support weekdays 8am to 5pm",
    "Information on services for older adults and caregivers"
  ]
},
{
  n: "Community Youth Center (White Salmon)",
  esn: "Centro Juvenil Comunitario (White Salmon)",
  s: ["kidsprog"],
  c: ["Klickitat"],
  a: KP,
  d: "Free drop-in center for ages 7 to 17 at 453 E Jewett Blvd, run by WAGAP.",
  es: "Centro gratuito y sin cita para jóvenes de 7 a 17 años en 453 E Jewett Blvd, operado por WAGAP.",
  ph: "509-493-4233",
  find: 1,
  det: [
    "Ages 7 to 17; free",
    "School year: weekdays noon to 5:30pm; summer: weekdays 3 to 7pm",
    "Dinner nights, Girls Circle and a community garden"
  ]
},
{
  n: "Our Klickitat youth prevention",
  esn: "Our Klickitat: prevención juvenil",
  s: ["kidsprog","wellness"],
  c: ["Klickitat"],
  a: ["teens"],
  d: "Youth leadership and a youth council, plus campaigns to reduce youth substance use. Run through WAGAP.",
  es: "Liderazgo juvenil, un consejo de jóvenes y campañas para reducir el consumo de sustancias. Opera por medio de WAGAP.",
  u: "https://www.wagap.org/prevention",
  det: [
    "Youth leadership and a youth council",
    "Campaigns to reduce youth access to substances"
  ]
},
{
  n: "Klickitat County 4-H (WSU Extension)",
  s: ["kidsprog"],
  c: ["Klickitat"],
  a: KP,
  d: "4-H clubs, camps and county fair activities for kids and teens.",
  es: "Clubes, campamentos y actividades de la feria del condado para niños y adolescentes.",
  ph: "509-773-5817",
  u: "https://extension.wsu.edu/klickitat",
  det: [
    "Clubs and youth camps (such as horse and quilt camps)",
    "Shooting sports and the county fair"
  ]
},
{
  n: "Fort Vancouver Regional Libraries (White Salmon & Goldendale)",
  s: ["kidsprog","classes"],
  c: ["Klickitat"],
  a: AA,
  d: "Library programs for kids, teens and adults, plus free tech help in Goldendale.",
  es: "Programas de biblioteca para niños, adolescentes y adultos, y ayuda gratis con tecnología en Goldendale.",
  u: "https://www.fvrl.org",
  det: [
    "Teen game afternoons and kids crafts at Goldendale",
    "Free one-on-one tech help at Goldendale (monthly)",
    "Adult book groups and summer reading"
  ]
},
{
  n: "Epic Youth Center (Goldendale)",
  s: ["kidsprog"],
  c: ["Klickitat"],
  a: KP,
  d: "Youth center in Goldendale with community events and summer activities.",
  es: "Centro juvenil en Goldendale con eventos comunitarios y actividades de verano.",
  u: "https://epicyouthcenter.org",
  det: [
    "Summer kickoff events and sports activities",
    "Check their site for current programs"
  ]
},
{
  n: "Substance use treatment (Mid-Columbia Center for Living)",
  esn: "Tratamiento por uso de sustancias (Mid-Columbia Center for Living)",
  s: ["recovery","mental"],
  c: ["Hood River","Wasco"],
  a: ADT,
  d: "Outpatient substance use counseling in The Dalles and Hood River, with peer support. Accepts OHP; sliding scale.",
  es: "Consejería ambulatoria por uso de sustancias en The Dalles y Hood River, con apoyo de compañeros. Acepta OHP; tarifa según ingresos.",
  ph: "541-296-5452",
  u: "https://mccfl.org",
  det: [
    "Individual, group and family counseling for substance use",
    "DUI programs",
    "Peer mentoring; directories list medications for opioid and alcohol use disorder",
    "Hood River 541-386-2620"
  ]
},
{
  n: "Klickitat County treatment agency list",
  esn: "Lista de tratamiento del condado de Klickitat",
  s: ["recovery"],
  c: ["Klickitat"],
  a: ADT,
  d: "The county’s list of local and nearby substance use treatment providers.",
  es: "La lista del condado de proveedores locales y cercanos de tratamiento por uso de sustancias.",
  u: "https://klickitatcounty.gov/1047/Treatment-Agency-List",
  det: [
    "Includes Klickitat Valley Health, Mid-Columbia Center for Living and nearby Vancouver providers"
  ]
},
{
  n: "Oregon Health Plan (OHP)",
  s: ["medical","dental","mental"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "Free health coverage for eligible Oregonians. Local clinics can help you apply.",
  es: "Cobertura de salud gratis para personas de Oregón que califican. Las clínicas locales le ayudan a solicitarla.",
  u: "https://www.oregon.gov/oha/healthplan",
  det: [
    "Covers medical, dental and behavioral health for eligible people",
    "One Community Health advocates can help you apply or renew"
  ]
},
{
  n: "Washington Apple Health",
  s: ["medical","dental","mental"],
  c: ["Klickitat"],
  a: AA,
  d: "Free or low-cost coverage for eligible Washington residents.",
  es: "Cobertura gratis o de bajo costo para residentes de Washington que califican.",
  u: "https://www.hca.wa.gov/apple-health",
  det: [
    "Covers medical, dental and behavioral health for eligible people",
    "Local clinics and 211 can help you apply"
  ]
},
{
  n: "Bridges to Health (community health workers)",
  esn: "Bridges to Health (trabajadores de salud comunitarios)",
  s: ["wellness"],
  c: ["Hood River","Wasco"],
  a: AA,
  d: "Community health workers help you navigate health care and social services. Based at the Gloria Center in The Dalles.",
  es: "Trabajadores comunitarios de salud le ayudan a usar los servicios de salud y sociales. En el Gloria Center, The Dalles.",
  find: 1,
  det: [
    "Community health workers connect people to care and services",
    "Located with partner agencies at the Gloria Center"
  ]
}
];
