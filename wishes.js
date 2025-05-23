const wishes =  [
    "සබ්බේ සංඛාරා අනිච්චා - සියලු සංස්කාරයෝ අනිත්‍යයහ. මේ වෙසක් සමයේ අනිත්‍යතාවය අවබෝධ කරගෙන සන්සුන් වන්න!",
    "සබ්බේ සංඛාරා දුක්ඛා - සියලු සංස්කාරයෝ දුක්ඛයහ. දුක්ඛය අවබෝධ කරගෙන එයින් මිදීමට උත්සාහ කරන්න!",
    "සබ්බේ ධම්මා අනත්තා - සියලු ධර්මයෝ අනාත්මයහ. ආත්ම සංකල්පයෙන් මිදී නිදහස් වන්න!",
    "අප්පමාදේන සම්පාදේථ - අප්‍රමාදීව කුසල් සම්පාදනය කරන්න. මේ වෙසක් සමයේ යහපත් ක්‍රියාවන්හි නිරත වන්න!",
    "කායේන සංවරෝ සාධු - කයින් සංවර වීම යහපත්ය. ඔබේ ක්‍රියාවන් යහපත් වේවා!",
    "වාචාය සංවරෝ සාධු - වචනයෙන් සංවර වීම යහපත්ය. ඔබේ වචන මිහිරි හා සත්‍ය වේවා!",
    "මනසා සංවරෝ සාධු - සිතින් සංවර වීම යහපත්ය. ඔබේ සිත පිරිසිදු හා යහපත් වේවා!",
    "සංවරෝ සබ්බථ සාධු - සියලු අතින් සංවර වීම යහපත්ය. ඔබ සෑම අතින්ම යහපත් වන්න!",
    "ධම්මං චරේ සුචරිතං - යහපත් ලෙස ධර්මයෙහි හැසිරෙන්න. ධර්මානුකූල ජීවිතයක් ගත කරන්න!",
    "න තං කම්මං කතං සාධුං යං කත්වා අනුතප්පති - යම් කර්මයක් කොට පසුතැවිලි වන්නේ නම් එය යහපත් නොවේ. එබැවින් යහපත් කර්ම කරන්න!",
    "යං ච කත්වා නානුතප්පති - යමක් කොට පසුතැවිලි නොවන්නේ නම් එය යහපත්ය. එවැනි යහපත් ක්‍රියා කරන්න!",
    "උට්ඨානවතෝ සතිමතෝ - උත්සාහවන්ත වූ සිහි ඇති අයගේ...",
    "සුචි කම්මස්ස නිසම්මකාරිනෝ - පිරිසිදු කර්ම ඇතිව විමසා කටයුතු කරන්නාගේ...",
    "අප්පමත්තස්ස ධම්මජීවිනෝ - අප්‍රමාදීව ධර්මයට අනුව ජීවත් වන්නාගේ...",
    "වාරි සෙලෝව ථූණාහතෝ - සුළඟින් නොසැලෙන පර්වතයක් මෙන් වන්න!",
    "නින්දිතානං න නින්දන්ති - නින්දා ලැබූවන් නින්දා නොකරති.",
    "සම්මතානං න සම්මතී - ප්‍රශංසා ලැබූවන් ඒ ගැන සතුටු නොවෙති.",
    "ලාභෝ අලාභෝ යසෝ අයසෝ ච - ලාභය, අලාභය, යසස, අයසස...",
    "නින්දා පසංසා ච එකේ සමා - නින්දාව හා ප්‍රශංසාව යන දෙකෙහිම සමව සිටින්න!",
    "දුල්ලභෝ පුරිසාජඤ්ඤෝ - පුරුෂාජානයා හෙවත් උතුම් පුරුෂයා සොයා ගැනීම දුර්ලභය.",
    "සෝචන්ති කාමගුණේසු ගිද්ධා - කාම ගුණවලට ඇලුම් කරන්නෝ ශෝක කරති.",
    "න හි ජිගුච්ඡන්ති පණ්ඩිතා - නුවණැත්තෝ (ඒ ගැන) පිළිකුල් නොකරති.",
    "භයං මරණතෝ වෙක්ඛති - මරණයට ඇති බිය දුරු කරයි.",
    "අභයං සබ්බතෝ දිසං - සියලු දිශාවලින් අභය දානය දෙයි.",
    "ධම්මෝ සුචින්නෝ සුඛමාවහති - මනා ලෙස පුරුදු කරන ලද ධර්මය සැප ගෙන දෙයි.",
    "යමකං පඨමං වග්ගං - යමක නම් වූ පළමුවන වග්ගය (මතක තබාගෙන යහපත් වන්න).",
    "අප්පමාදෝ අමතං පදං - අප්‍රමාදය අමරණීයත්වයට මාර්ගයයි. අප්‍රමාදී වන්න!",
    "පමාදෝ මච්චුනෝ පදං - ප්‍රමාදය මරණයට මාර්ගයයි. ප්‍රමාදයෙන් වළකින්න!",
    "න හි වෙරේන වෙරානි - වෛරයෙන් වෛරය නොසන්සිඳේ.",
    "අවේරේන ච සම්මන්ති - අවෛරයෙන් වෛරය සන්සිඳේ.",
    "ජයං වෙරං පසවති - ජයග්‍රහණය වෛරය උපදවයි.",
    "පරාජිතෝ දුක්ඛං සේති - පරාජිතයා දුකින් නිදා ගනී.",
    "උපසන්තෝ සුඛං සේති - උපශාන්ත වූ තැනැත්තා සුවසේ නිදා ගනී.",
    "නත්ථි රාගසමෝ අග්ගි - රාගය සමාන ගින්නක් නැත.",
    "නත්ථි දෝසසමෝ කලි - ද්වේෂය සමාන කිලිටක් නැත.",
    "නත්ථි ඛන්ධාදිසා දුක්ඛා - ස්කන්ධයන්ට සමාන දුකක් නැත.",
    "නත්ථි සන්තිපරං සුඛං - ශාන්තියට වඩා උතුම් සැපයක් නැත.",
    "ආරෝග්‍යා පරමා ලාභා - නිරෝගී බව උතුම්ම ලාභයයි.",
    "සන්තුට්ඨි පරමං ධනං - සතුට උතුම්ම ධනයයි.",
    "විස්සාස පරමා ඤාතී - විශ්වාසය උතුම්ම ඥාතියායි.",
    "නිබ්බාණං පරමං සුඛං - නිබ්බාණය පරම සැපයයි.",
    "සුඛා වත බුද්ධානං උප්පාදෝ - බුදුවරුන්ගේ ඉපදීම සැපයකි.",
    "සුඛා ධම්ම දේසනා - ධර්ම දේශනාව සැපයකි.",
    "සුඛා සංඝස්ස සාමග්ගී - සංඝයාගේ සමගිය සැපයකි.",
    "සමග්ගානං තපෝ සුඛෝ - සමගි වූවන්ගේ තපස සැපයකි.",
    "අජේතං ජයං ලභති - නොපරදින්නා ජය ලබයි.",
    "සබ්බදා සබ්බේසං - සැම විටම සියල්ලන් කෙරෙහි...",
    "මෛත්තිං භාවයතේ අප්පමාණං - අප්‍රමාණ මෛත්‍රිය වඩන්න!",
    "න පරූපඝාතී හෝති - අනුන් පෙළන්නෙකු නොවේ.",
    "ස වේ භික්ඛු සුඛං ඒධති - ඒ භික්ෂුව සුවසේ වැඩෙයි."
]
