import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  az: { hse: {
        title: "Həyat, Sağlamlıq və Ətraf Mühit (HSE)",
        environmental_monitoring: "Ətraf Mühitin Monitorinqi",
        environmental_desc: "CDF-in ətraf mühitin monitorinqi sahəsindəki əsas fəaliyyəti...",
        environmental_desc_full: "CDF-in ətraf mühitin monitorinqi sahəsindəki əsas fəaliyyəti, təbii və antropogen təsirlər nəticəsində sənayedə və tərəfdaş şirkətlərdə ətraf mühitə atılan zərərli tullantıların maye və bərk formada kəmiyyət və keyfiyyət monitorinqini həyata keçirmək, onların kimyəvi tərkibini, çirklənmə dərəcəsini, radioaktiv və hidro-bioloji xüsusiyyətlərini və fiziki xarakteristikalarını müəyyən edən mütəmadi nəzarət və tədqiqat sistemini tətbiq etməkdən ibarətdir.",
        environmental_policy: "Ətraf Mühit Siyasəti",
        employees_security: "Əməkdaşların Təhlükəsizliyi",
        employees_security_desc: "Bütün fəaliyyətlərimizdə işçilərimizin sağlamlığı və təhlükəsizliyi bizim əsas prioritetimizdir.",
        employees_security_desc_full: "Bütün fəaliyyətlərimizdə işçilərimizin sağlamlığı və təhlükəsizliyi bizim əsas prioritetimizdir. Biz, təhlükəsiz iş şəraitini təmin etmək, peşə xəstəliklərinin qarşısını almaq və bütün işçilər üçün riskləri minimuma endirmək üçün ən yüksək standartları tətbiq edirik. Mütəmadi təlimlər, müasir təhlükəsizlik avadanlıqları və ciddi protokollarımızla hər bir əməkdaşın təhlükəsizliyini təmin edirik.",
        read_more: "Ətraflı oxu",
        no_results: "Heç bir nəticə tapılmadı"
      },
    translation: {
      about_us: { 
        title: "Biz Kimik?",
        about_company: "Caspian Drilling Fluids (CDF) qazma və tamamlama məhlullarının satışı, dizaynı, mühəndislik xidmətləri və məhsullarına fokuslanmış neft və qaz mühəndisliyi şirkətidir.",
        description_1: "Qazma və tamamlama məhlulları neft və qaz hasilatının maksimum səviyyədə təmin edilməsində çox mühüm rol oynayır və biz, CDF olaraq, optimal neft-qaz hasilatını təmin etmək üçün kəşfiyyat mərhələsindən hasilata qədər zəruri məhsul və xidmətləri təqdim edirik.",
        description_2: "Şirkətimiz Türkiyənin daxili bazarlarına üzvi kimyəvi maddələrin aparıcı idxalçısıdır. İstanbul və Adana bölgələrində saxlama anbarlarımız var. Geniş çeşiddə məhsullar təklif edərək, Türkiyənin monomer və polimer bazarının təxminən 7%-ni təmin edirik. Eyni zamanda, Adana bölgəsindəki anbarlarımıza kimyəvi tullantılar da idxal edirik."
      },
      home_page: {
        who_we_are: {
          title: "Biz Kimik?",
          text1: "Caspian Drilling Fluids (CDF) qazma və tamamlama məhlullarının satışı, dizaynı, mühəndislik xidmətləri və məhsullarına fokuslanmış neft və qaz mühəndisliyi şirkətidir.",
          text2: "Qazma və tamamlama məhlulları neft və qaz hasilatının maksimum səviyyədə təmin edilməsində çox mühüm rol oynayır və biz, CDF olaraq, optimal neft-qaz hasilatını təmin etmək üçün kəşfiyyat mərhələsindən hasilata qədər zəruri məhsul və xidmətləri təqdim edirik.",
          text3: "Şirkətimiz Türkiyənin daxili bazarlarına üzvi kimyəvi maddələrin aparıcı idxalçısıdır. İstanbul və Adana bölgələrində saxlama anbarlarımız var. Geniş çeşiddə məhsullar təklif edərək, Türkiyənin monomer və polimer bazarının təxminən 7%-ni təmin edirik. Eyni zamanda, Adana bölgəsindəki anbarlarımıza kimyəvi tullantılar da idxal edirik."
        }
      },
      activitiesSection: {
        subtitle: 'FƏALİYYƏTLƏR',
        title: 'Fəaliyyətlərimiz',
        nonaqueousDrillingFluids: {
          title: 'Qeyri-sulu Qazma Məhlulları (OBM)',
          description: 'Müştərinin ən yüksək səviyyədə inhibisiya, yağlama, termal və kimyəvi sabitlik tələblərinə cavab vermək üçün biz, çətin şərtlər üçün nəzərdə tutulmuş bir sıra Qeyri-sulu Qazma Məhlulları sistemləri təklif edirik. Portfelimizə neft, dizel və sintetik əsaslı qazma məhlulları daxildir ki, bunlar da quruda və dənizdəki çətin texniki tətbiqlər üçün xüsusi olaraq hazırlanmışdır.'
        },
        waterBaseDrillingFluids: {
          title: 'Su Əsaslı Qazma Məhlulları',
          description: 'Bu məhlullar ekoloji cəhətdən təmiz, sərfəli və çoxfunksiyalıdır.'
        },
        completionAndWorkoverFluids: {
          title: 'Tamamlama və Əsaslı Təmir Məhlulları Xidmətləri',
          description: 'Tamamlama və əsaslı təmir məhlullarının dizaynı quyunun bütövlüyünə və ömrünə birbaşa təsir edir.'
        },
        drillingFluidsSimulation: {
          title: 'Qazma Məhlulları Simulyasiya Proqramı',
          description: 'Təcrübəli mühəndislərimiz aşağıdakı xidmətləri təqdim edərək layihələrinizə dəyər qata bilərlər.'
        }
      },
      missionSection: {
        missionTitle: 'MİSSİYAMIZ',
        missionText: 'region bazarında yerli neft və qaz şirkətlərinə ən keyfiyyətli və müasir məhsul və xidmətləri təqdim edərək aparıcı məhlul xidməti təchizatçısı olmaqdır.',
        highlightedText: 'CDF-in məqsədi',
        cardTitles: {
          projectManagementServices: {
            title: 'Layihə İdarəetmə Xidmətləri',
            subtitle: 'Xidmətlər'
          },
          engineeringServices: {
            title: 'Mühəndislik Xidmətləri',
            subtitle: 'Xidmətlər'
          },
          logisticServices: {
            title: 'Logistik Xidmətlər',
            subtitle: 'Xidmətlər'
          },
          warehouse: {
            title: 'Anbar',
            subtitle: 'Xidmətlər'
          }
        },
        readMore: 'Daha Çox Oxu',
        stats: {
          projects: { label: 'Layihələr' },
          partners: { label: 'Tərəfdaşlar' },
          years: { label: 'İl' },
          countries: { label: 'Ölkələr' }
        }
      },
      hse: {
        title: "Həyat, Sağlamlıq və Ətraf Mühit (HSE)",
        environmental_monitoring: "Ətraf Mühitin Monitorinqi",
        environmental_desc: "CDFl-in ətraf mühitin monitorinqi sahəsindəki əsas fəaliyyəti...",
        environmental_desc_full: "CDFl-in ətraf mühitin monitorinqi sahəsindəki əsas fəaliyyəti, təbii və antropogen təsirlər nəticəsində sənayedə və tərəfdaş şirkətlərdə ətraf mühitə atılan zərərli tullantıların maye və bərk formada kəmiyyət və keyfiyyət monitorinqini həyata keçirmək, onların kimyəvi tərkibini, çirklənmə dərəcəsini, radioaktiv və hidro-bioloji xüsusiyyətlərini və fiziki xarakteristikalarını müəyyən edən mütəmadi nəzarət və tədqiqat sistemini tətbiq etməkdən ibarətdir.",
        environmental_policy: "Ətraf Mühit Siyasəti",
        employees_security: "Əməkdaşların Təhlükəsizliyi",
        employees_security_desc: "Bütün fəaliyyətlərimizdə işçilərimizin sağlamlığı və təhlükəsizliyi bizim əsas prioritetimizdir.",
        employees_security_desc_full: "Bütün fəaliyyətlərimizdə işçilərimizin sağlamlığı və təhlükəsizliyi bizim əsas prioritetimizdir. Biz, təhlükəsiz iş şəraitini təmin etmək, peşə xəstəliklərinin qarşısını almaq və bütün işçilər üçün riskləri minimuma endirmək üçün ən yüksək standartları tətbiq edirik. Mütəmadi təlimlər, müasir təhlükəsizlik avadanlıqları və ciddi protokollarımızla hər bir əməkdaşın təhlükəsizliyini təmin edirik.",
        read_more: "Ətraflı oxu",
        no_results: "Heç bir nəticə tapılmadı"
      
},
      productsSection: {
        category: 'MƏHSULLAR',
        title: 'Məhsullarımız',
        completionAndWorkoverAdditives: {
          title: 'Tamamlama və Əsaslı Təmir Məhlulları Əlavələri'
        },
        drillingFluidAdditives: {
          title: 'Qazma Məhlulları Əlavələri'
        },
        readMore: 'Daha Çox Oxu'
      },
      header: {
        home: 'Ana Səhifə',
        activities: 'Fəaliyyətlər',
        products: 'Məhsullar',
        hse: 'Sağlamlıq, Təhlükəsizlik və Ətraf Mühit',
        about_us: 'Haqqımızda'
      },
      activities: {
        nonaqueous_drilling_fluids_obm: "Qeyri-sulu Qazma Məhlulları (OBM)",
        water_base_drilling_fluids: "Su Əsaslı Qazma Məhlulları",
        completion_workover_fluids_services: "Tamamlama və Əsaslı Təmir Məhlulları Xidmətləri",
        drilling_fluids_simulation_software: "Qazma Məhlulları Simulyasiya Proqramı",
        submersible_electric_centrifugal_pumps_and_submersible_electric_motors_for_esp_drive_evn: "Dalış Elektrik Mərkəzdənqaçma Nasosları və Dalış Elektrik Mühərrikləri (EVN)",
        central_laboratory: "Mərkəzi Laboratoriya",
        warehouse: "Anbar",
        logistic_services: "Logistik Xidmətlər",
        engineering_services: "Mühəndislik Xidmətləri",
        project_management_services: "Layihə İdarəetmə Xidmətləri",
        nonaqueous_drilling_fluids_obm_title: 'Qeyri-sulu Qazma Məhlulları (OBM)',
        nonaqueous_drilling_fluids_obm_text_1: 'Müştərinin ən yüksək səviyyədə inhibisiya, yağlama, termal və kimyəvi sabitlik tələblərinə cavab vermək üçün biz, çətin şərtlər üçün nəzərdə tutulmuş bir sıra Qeyri-sulu Qazma Məhlulları sistemləri təklif edirik.',
        nonaqueous_drilling_fluids_obm_text_2: 'Portfelimizə neft, dizel və sintetik əsaslı qazma məhlulları daxildir ki, bunlar da quruda və dənizdəki çətin texniki tətbiqlər üçün xüsusi olaraq hazırlanmışdır.',
        central_laboratory_title: 'Mərkəzi Laboratoriya',
        central_laboratory_text_1: 'Yeni CDF Mərkəzi Laboratoriyası Bakı şəhəri, Qaradağ rayonunda yerləşir. Laboratoriya əsasən OFITE və FANN tərəfindən istehsal olunan və API (American Petroleum Institute) standartlarına cavab verən avadanlıqlarla təchiz edilmişdir.',
        central_laboratory_text_2: 'Laboratoriyada istifadə olunan bütün avadanlıqlar hər il Azərbaycan Dövlət Metrologiya İnstitutunda kalibrasiya olunur.',
        central_laboratory_main_functions: 'Əsas funksiyalar',
        central_laboratory_list_1: 'Su əsaslı qazma məhlullarının analizi və keyfiyyətinə nəzarət.',
        central_laboratory_list_2: 'Yağ əsaslı qazma məhlullarının analizi və keyfiyyətinə nəzarət.',
        central_laboratory_list_3: 'Tamamlama və əsaslı təmir məhlullarının analizi və keyfiyyətinə nəzarət.',
        central_laboratory_list_4: 'Laboratoriya avadanlıqlarının sazlanması.',
        central_laboratory_list_5: 'Lay sularının analizi.',
        central_laboratory_list_6: 'Giriş nəzarəti (gələn məhsulların keyfiyyətinə nəzarət).',
        central_laboratory_list_7: 'Yeni məhsulların sınaqdan keçirilməsi.',
        get_in_touch: 'Əlaqə saxlayın',
        name: 'Ad, soyad',
        email: 'E-poçt',
        message: 'Mesaj',
        contact_info: 'Əlaqə Məlumatları',
        water_base_drilling_fluids_title: 'Su Əsaslı Qazma Məhlulları',
        completion_workover_fluids_title: 'Tamamlama və Əsaslı Təmir Məhlulları Xidmətləri',
        completion_workover_fluids_text_1: 'Tamamlama və əsaslı təmir məhlullarının dizaynı quyunun bütövlüyünə və ömrünə birbaşa təsir edir.',
        completion_workover_fluids_text_2: 'Yaxşı bir məhlul işləmə əməliyyatlarını minimuma endirəcək, korroziya sürətini azaldacaq və quyu daxilindəki alətlərə zərər vurmağın qarşısını alacaq. Bundan əlavə, biz quyuya zərərli maddələrin daxil olmasını minimuma endirmək üçün tamamlama və əsaslı təmir məhlullarının lay suyunun xassələri ilə uyğunluğunu qiymətləndiririk.',
        simulation_software_title: 'Qazma Məhlulları Simulyasiya Proqramı',
        simulation_software_text_1: 'Biz, müştərilərimizin qazma fəaliyyətlərindəki mühəndislik və əməliyyat tələblərini ödəmək üçün geniş çeşidli qazma məhlulları mühəndislik həlləri təklif edirik.',
        simulation_software_text_2: 'Təcrübəli mühəndislərimiz aşağıdakı xidmətləri təqdim edərək layihələrinizə dəyər qata bilərlər:',
        simulation_software_list_1: 'Qazma Məhlulları Mühəndisliyi',
        simulation_software_list_2: 'Tamamlama və Əsaslı Təmir Məhlullarının Dizayn Proqramı',
        simulation_software_list_3: 'Hidravlik və Quyu Təmizlənməsi Dizaynı',
        simulation_software_list_4: 'Quyu Divarının Sabitliyinin Öyrənilməsi',
        simulation_software_list_5: 'Qazma Problemlərinin Araşdırılması',
        simulation_software_list_6: 'Yekun Quyu Hesabatı və İcmalı',
        simulation_software_list_7: 'Qabaqcıl Texnologiyalar və Tətbiqlər',
        simulation_software_list_8: 'Ümumi Məhlul İdarəetmə Layihəsi',
        simulation_software_list_9: 'Etalonlaşdırma və Performansın Qiymətləndirilməsi',
        warehouse_title: 'Anbar',
        warehouse_text: 'CDF kimyəvi maddələrin və digər xidmət mallarının təhlükəsiz saxlanması üçün 2400 kvadratmetr sahəsi olan anbara malikdir. Anbar personalı da bütün digər əməkdaşlar kimi HSE üzrə təlimlərdən keçmişdir.',
        logistic_services_title: 'Logistik Xidmətlər',
        logistic_services_text_1: 'CDF qlobal logistik həllər təminatçısıdır. Şirkət detallara diqqəti, yaradıcı və innovativ problemləri həll etmə bacarığı və müştərilərə qarşı həssaslığı ilə fəxr edir. CDF beynəlxalq logistik xidmətlər sahəsində peşəkarlıq təklif edir, o cümlədən:',
        logistic_services_list_1: 'Nəqliyyatın idarə edilməsi',
        logistic_services_list_2: 'Logistika idarəetməsi',
        logistic_services_list_3: 'Beynəlxalq çatdırılma',
        logistic_services_list_4: 'Daxili çatdırılma',
        logistic_services_list_5: 'Gömrük rəsmiləşdirilməsi',
        engineering_services_title: 'Mühəndislik Xidmətləri',
        engineering_services_text_1: 'CDF-in mühəndislik komandası müştərilərimizə layihələrinin planlaşdırılması, dizaynı və qurulmasında kömək edir. CDF mühəndislik paketlərinin hazırlanması və izlənilməsi üçün ən müasir texnologiyadan istifadə edir. Mühəndislik xidmətlərimizə aşağıdakılar daxildir:',
        engineering_services_list_1: 'Pre-FEED tədqiqatları',
        engineering_services_list_2: 'FEED tədqiqatları',
        engineering_services_list_3: 'Debottlenecking (darboğazların aradan qaldırılması)',
        engineering_services_list_4: 'Optimizasiya tədqiqatları',
        engineering_services_list_5: 'Zavod dizaynı',
        engineering_services_list_6: 'Təkmilləşdirmələr',
        engineering_services_list_7: 'Retrofits (köhnə avadanlıqların yenilənməsi)',
        project_management_title: 'Layihə İdarəetmə Xidmətləri',
        project_management_text_1: 'CDF layihələrin vaxtında və büdcə çərçivəsində tamamlanmasını təmin etmək üçün müştərilərimizə layihələrin planlaşdırılması və nəzarət edilməsində kömək edir. Layihə Menecerlərimiz layihələrin təşkili və idarə edilməsi sahəsində geniş beynəlxalq təcrübəyə malikdirlər.',
        project_management_text_2: 'CDF layihə resurslarını planlaşdırır və təyin edir, büdcələri hazırlayır, gedişatı izləyir və bütün layihə boyunca maraqlı tərəfləri məlumatlandırır. Layihə İdarəetmə Xidmətlərimiz müştərilərimizə layihələrinin uğurlu olmasını təmin etmək üçün lazım olan məlumat və dəstəyi verir.',
        project_management_list_1: 'Layihənin planlaşdırılması',
        project_management_list_2: 'Layihənin icrası',
        project_management_list_3: 'Risk idarəetməsi',
        project_management_list_4: 'Büdcə nəzarəti',
        project_management_list_5: 'Zamanın idarə edilməsi',
        project_management_list_6: 'Resursların idarə edilməsi',
        project_management_list_7: 'Maraqlı tərəflərlə əlaqələrin idarə edilməsi'
      },
      products: {
        drilling_additives: 'Qazma Məhlulları Əlavələri',
        completion_additives: 'Tamamlama və Əsaslı Təmir Məhlulları Əlavələri'
      },
      hse: {
        environmental: 'Ətraf Mühitin Monitorinqi',
        employees_security: 'İşçilərin Təhlükəsizliyi'
      },
      activities_page: {
        title: 'Fəaliyyətlərimiz',
        subtitle: 'Xidmətlərimizlə bağlı ətraflı məlumat əldə edin',
        search_placeholder: 'Fəaliyyət axtar',
        no_results: 'Nəticə tapılmadı'
      },
      water_base_page: {
        description: 'Su əsaslı qazma məhlulları suyun davamlı faza kimi istifadə edilməsi ilə hazırlanır. Bu məhlullar ekoloji cəhətdən təmiz, sərfəli və çoxfunksiyalı olub, geniş spektrli qazma tətbiqləri üçün uyğundur. Onlar quyu divarının yaxşı sabitliyini, əla fluid itkisi nəzarətini təmin edir və spesifik qazma şərtlərini asanlıqla tənzimlənə bilir.',
        table_headers_trade_name: 'Ticarət Adı',
        table_headers_fluid_type: 'Məhlul növü',
        table_headers_systems_description: 'Sistem təsviri',
        table_headers_application: 'Tətbiq sahəsi',
        table_1_title: 'Mülayim – Aktiv Şeyl/Gil üçün İnhibisiya Edilmiş HPWBM',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'Qazma məhlulunda gil dispersiyasının və reoloji xassələrin dəyişməsinin qarşısını almaq üçün yüksək molekul çəkili polimerlərdən ibarət HPWBM.',
        table_1_data_1_application: 'Yüksək reaktiv gil/şeyl qazmaq/sürətin artırılması. Quyu divarının stabilliyini artırır. Stabil quyu şəraitində ROP-u artırır.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'Aşağı və yüksək lay temperaturları ilə uyğunlaşan müxtəlif növ qlikol və inhibitor duzlardan istifadə edərək şeyl problemlərini aradan qaldırmaq üçün HPWBM.',
        table_1_data_2_application: 'Durulaşma sürətini azaldır. Burağın yapışmasını minimuma endirir. ROP-u artırır. Tork və sürtünməni azaldır.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'Şeyl stabilliyini yaxşılaşdırmaq, qazılmış bərk hissəciklərin dağılmasının qarşısını almaq və reaktiv şeyllərdə yüksək temperaturda su itkisini nəzarətdə saxlamağa kömək etmək üçün asfalt əlavələri ilə hazırlanmış HPWBM.',
        table_1_data_3_application: 'Quyu divarının stabilliyi/yüksək temperaturda su itkisini azaltmağa kömək edir. Durulaşma sürətini azaldır. ROP-u artırır. Tork və sürtünməni azaldır.',
        table_2_title: 'Yüksək Təzyiq Zonaları üçün Ağırlaşdırılmış HPWBM',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'BARA-WATE və HEMA WATE ağırlaşdırıcı agentləri, uyğun özlülük artırıcıları, su itkisinə nəzarət edən agentlər və temperatur stabilizatorlarından istifadə etməklə 2.4 S.G-ə qədər yüksək təzyiqli zonaları qazmaq üçün duzla doymuş su əsaslı məhlul.',
        table_2_data_1_application: '2.4 S.G-ə qədər dərin yüksək təzyiqli duzlu su zonasını qazmaq üçün. Kalsium və maqneziuma yüksək müqavimət. Yaxşı reoloji xassələr və yüksək temperaturda stabil gel möhkəmliyi.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'BARA-WATE və HEMA-WATE ağırlaşdırıcı agentləri, xüsusi reologiya nəzarət agentləri ilə 2.65 S.G-ə qədər yüksək təzyiqli zonaları qazarkən reoloji xassələri və su itkisini sabit saxlamaq üçün duzla doymuş su əsaslı məhlul.',
        table_2_data_2_application: '2.65 S.G-ə qədər dərin anormal yüksək təzyiqli duzlu su zonasını qazmaq üçün. Kalsium və maqneziuma yüksək müqavimət. Yaxşı reoloji xassələr və yüksək temperaturda stabil gel möhkəmliyi.',
        table_3_title: 'Yönəldilmiş, Horizontal və Genişləndirilmiş Çatışma Quyuları üçün Yüksək ROP HPWBM',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'Sürüşmə zamanı tork və sürtünməni azaltmaq və ROP-u yaxşılaşdırmaq üçün xüsusi yüksək performanslı sürtkü yağlarından istifadə etməklə yüksək yönəldilmiş və horizontal hissəni qazmaq üçün hazırlanmış HPWBM.',
        table_3_data_1_application: 'Horizontal və yüksək yönəldilmiş quyuları qazmaq üçün. Tork və sürtünməni/sürtünmə əmsalını azaldır. ROP-u yaxşılaşdırır. Diferensial yapışmanı azaldır.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'Biz, müştərilərimizin qazma fəaliyyətlərindəki mühəndislik və əməliyyat tələblərini ödəmək üçün geniş çeşidli qazma məhlulları mühəndislik həlləri təklif edirik.',
        description_2: 'Təcrübəli mühəndislərimiz aşağıdakı xidmətləri təqdim edərək layihələrinizə dəyər qata bilərlər:',
        services_title: 'Qazma Məhlulları Mühəndisliyi',
        service_1: 'Tamamlama və əsaslı təmir məhlullarının proqram dizaynı',
        service_2: 'Məhlul Dizaynı',
        service_3: 'Hidravlik və quyu təmizlənməsi dizaynı',
        service_4: 'Quyu divarının sabitliyinin öyrənilməsi',
        service_5: 'Qazma Problemlərinin Araşdırılması',
        service_6: 'Yekun quyu hesabatı və icmalı',
        advanced_title: 'Qabaqcıl Texnologiyalar və Tətbiqlər',
        advanced_1: 'Ümumi Məhlullar İdarəetmə Layihəsi',
        advanced_2: 'Əməliyyat İdarəetmə Layihəsi',
        advanced_3: 'Etalonlaşdırma və Performansın Qiymətləndirilməsi'
      }, contact: { 
      get_in_touch_title: "Əlaqə saxlayın",
      form_name_placeholder: "Ad, Soyad",
      form_email_placeholder: "Email",
      form_message_placeholder: "Mesajınız",
      get_in_touch_button: "Göndər",
      contact_info_title: "Əlaqə Məlumatları",
      loading_message: "Göndərilir...",
      success_message: "Mesajınız uğurla göndərildi!",
      error_message: "Mesaj göndərilərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin."
    },
      about_page: {
        certificates_title: "Sertifikatlar",
        best_in_the_world_title: "Dünyada Ən Yaxşı",
        best_in_the_world_text: "Yüksək keyfiyyətli xidmətlərimizlə dünya səviyyəsində liderik. Bizim peşəkar komandamız və innovativ həllərimizlə müştərilərimizə ən yaxşı nəticələri təqdim edirik.",
        stats_cases_solved: "Həll Olunmuş İşlər",
        stats_projects: "Layihələr",
        stats_happy_clients: "Məmnun Müştərilər",
        stats_yearly_profit: "İllik Gəlir"
      },
      slider: {
        title_1: "Qazma Məhlulları Mütəxəssisi",
        subtitle_1: "Neft-qaz sənayesində mükəmməl keyfiyyət",
        heading_1: "Təhlükəsizlik və Effektivlik",
        description_1: "Biz neft-qaz sənayesi üçün yüksək keyfiyyətli qazma və tamamlama məhlulları təmin edirik. Hər layihədə təhlükəsizlik və səmərəliliyi ön planda tuturuq.",
        title_2: "Həllərə Yönəlmiş Yanaşma",
        subtitle_2: "Fərqli qazma şərtlərinə uyğun həllər",
        heading_2: "Innovasiya və Mühəndislik",
        description_2: "Ən mürəkkəb qazma şərtlərinə cavab verən innovativ məhlullar hazırlayırıq. Müştərilərimizin ehtiyaclarına uyğun fərdi mühəndislik həlləri təklif edirik.",
        title_3: "Qlobal Əhatə, Yerli Təcrübə",
        subtitle_3: "Qabaqcıl texnologiya ilə xidmətinizdə",
        heading_3: "Dayanıqlı Gələcək",
        description_3: "Qlobal təcrübəmizi yerli biliklərlə birləşdirərək dayanıqlı və etibarlı xidmətlər göstəririk. Ətraf mühitin qorunmasına xüsusi diqqət yetiririk."
      },
      products_page: {
        drilling_fluid_additives: {
          title: "Qazma Məhlulları Əlavələri",
          description: "Qazma məhlulları əlavələri, qazma əməliyyatları zamanı onların xüsusiyyətlərini və performansını artırmaq və ya dəyişdirmək üçün bu məhlullara əlavə edilən xüsusi kimyəvi maddələr və ya materiallardır. Bu əlavələr müxtəlif funksiyaları yerinə yetirir və məhlulun özlülüyü, yağlaması, filtrasiya nəzarəti, şeyl inhibisiya və termal sabitlik kimi xüsusiyyətlərini yaxşılaşdıra bilər. Onlar qazma səmərəliliyini optimallaşdırmağa, quyu lüləsini qorumağa və müxtəlif geoloji formasiyalarda və şərtlərdə təhlükəsiz və effektiv qazma təmin etməyə kömək edir.",
          table_headers: {
            trade_name: "Ticarət Adı",
            unit_size: "Vahid Ölçü",
            description: "Təsvir"
          },
          products: {
            clay_bond_l: {
              trade_name: "CLAY BOND L",
              unit_size: "55 GAL/CAN",
              description: "Şeyl stabilliyini və kəsiklərin inkapsulyasiyasını təmin edir"
            },
            n_inhibit: {
              trade_name: "N-INHIBIT",
              unit_size: "55 GAL/DRUM",
              description: "Yüksək reaktiv şeyl/gillərdə KCl-ı əvəz etmək üçün yüksək inhibitiv, yüksək yağlama xüsusiyyətinə malik Nano-şeyl inhibitoru"
            },
            well_stab: {
              trade_name: "WELL-STAB",
              unit_size: "55 GAL/DRUM",
              description: "Quyu lüləsinin stabilliyini yaxşılaşdırmaq üçün kimyəvi maddələrin qarışığı"
            },
            shale_drill: {
              trade_name: "SHALE-DRILL",
              unit_size: "55 GAL/DRUM",
              description: "Quyu lüləsinin stabilizatoru, yağlama və yüksək filtrasiya nəzarəti agenti"
            },
            emo_block: {
              trade_name: "EMO-BLOCK",
              unit_size: "55 GAL/DRUM",
              description: "Yarı-keçirici membran Şeyl İnhibitoru"
            },
            h2s_scav_l: {
              trade_name: "H2S SCAV L",
              unit_size: "55 GAL/DRUM",
              description: "Su əsaslı məhlullarda istifadə olunan maye hidrogen-sulfid təmizləyicisi"
            },
            glyco_drill_gp: {
              trade_name: "GLYCO-DRILL GP",
              unit_size: "55 GAL/DRUM",
              description: "Yaxşı şeyl nəzarəti performansı təmin edən, kəsiklərin sərtliyini artıran məhsul"
            },
            well_sweep: {
              trade_name: "WELL-SWEEP",
              unit_size: "12.5 KG/SX",
              description: "Yüksək səmərəli quyu təmizliyi və kəsiklərin daşınmasını təmin edən Hi-Vis Pill/Süpürgə məhlulu"
            },
            hixo_drill: {
              trade_name: "HIXO-Drill",
              unit_size: "25 KG/SX",
              description: "Polimerlər/gilli məhlullar üçün Tiksotropik agentlər"
            },
            rheo_stab: {
              trade_name: "RHEO-STAB",
              unit_size: "55 GAL/DRUM",
              description: "Reoloji Sabitləşdirici agent"
            },
            rop_enhancer_hc: {
              trade_name: "ROP Enhancer (HC)",
              unit_size: "55 GAL/DRUM",
              description: "Yüksək gil tərkibli laylarda sürətləndirici agent kimi istifadə edilən qarışıq üzvi səthi-aktiv maddələr"
            },
            eco_lube_hp: {
              trade_name: "ECO Lube HP",
              unit_size: "55 GAL/DRUM",
              description: "Qazma məhlullarına yüksək dərəcədə yağlama xüsusiyyətləri verən məhsul"
            },
            pipe_free_mp: {
              trade_name: "PIPE-Free MP",
              unit_size: "55 GAL/DRUM",
              description: "Təzyiq altında diferensial yapışma əleyhinə əlavə"
            },
            bit_wash: {
              trade_name: "BIT-WASH",
              unit_size: "55 GAL/DRUM",
              description: "Yüksək Performanslı Buruq İlanması Əleyhinə Agent"
            }
          }
        },
        completion_and_workover_fluids_additives: {
          title: "Tamamlama və Əsaslı Təmir Məhlulları Əlavələri",
          description: "Tamamlama və əsaslı təmir məhlulları əlavələri, neft və qaz quyularında tamamlama və əsaslı təmir əməliyyatlarının səmərəliliyini və xüsusiyyətlərini artırmaq üçün bu məhlullara daxil edilən xüsusi kimyəvi maddələr və ya maddələrdir. Bu əlavələr əməliyyatların səmərəliliyini, təhlükəsizliyini və effektivliyini optimallaşdırmaqda mühüm rol oynayır.",
          table_headers: {
            trade_name: "Ticarət Adı",
            unit_size: "Vahid Ölçü",
            description: "Təsvir"
          },
          products: {
            anti_crystaline: {
              trade_name: "ANTI-CRYSTALINE",
              unit_size: "25 KG/SX",
              description: "Duzlu sular üçün Kristallaşma İnhibitoru"
            },
            calcium_bromide_l: {
              trade_name: "CALCIUM BROMIDE L",
              unit_size: "55 GAL/DRUM",
              description: "14.2 lbs/gal sıxlığa malik tək duzlu şəffaf duzlu məhlul"
            },
            calcium_bromide_p: {
              trade_name: "CALCIUM BROMIDE P",
              unit_size: "25 KG/SX",
              description: "Hidrobromik turşunun kalsium duzu. Havadan su udan konsentratlaşdırılmış hiqroskopik toz"
            },
            forma_drill_ii_l: {
              trade_name: "FORMA-DRILL II-L",
              unit_size: "1000 Lit/IBC",
              description: "Format Duzlu Məhlulu – Kalium Əsaslı – 1.57 S.G"
            },
            sodium_bromide_l: {
              trade_name: "SODIUM BROMIDE L",
              unit_size: "55 GAL/DRUM",
              description: "1.3 S.G sıxlığa malik tək duzlu şəffaf duzlu məhlul (maye)"
            },
            zinc_bromide: {
              trade_name: "ZINC BROMIDE",
              unit_size: "55 GAL/DRUM",
              description: "Minimum 1.92 SG sıxlığa malik şəffaf, bərk hissəciksiz duzlu məhlul"
            },
            well_clean: {
              trade_name: "WELL-CLEAN",
              unit_size: "55 GAL/DRUM",
              description: "Quyunun təmizlənməsi üçün agent"
            },
            bio_mcb: {
              trade_name: "BIO MCB",
              unit_size: "55 GAL/DRUM",
              description: "Filtr qabığının dağıdıcısı"
            },
            brine_cor_hp: {
              trade_name: "BRINE-COR HP",
              unit_size: "55 GAL/DRUM",
              description: "Yüksək aktiv, suda həll olunan korroziya inhibitoru"
            },
            ox_scav_l: {
              trade_name: "OX-SCAV L",
              unit_size: "55 GAL/DRUM",
              description: "Maye oksigen təmizləyicisi"
            },
            pipe_cor: {
              trade_name: "PIPE-COR",
              unit_size: "55 GAL/DRUM",
              description: "Korroziya inhibitoru – sprey növü"
            },
            clean_surf: {
              trade_name: "CLEAN SURF",
              unit_size: "55 GAL/DRUM",
              description: "Barit və digər palçıq bərk hissəciklərinin su-ıslatma xüsusiyyətini yaxşılaşdırmaq üçün emulsifikasiya edicilərin qarışığı"
            },
            defoam_alc: {
              trade_name: "DEFOAM ALC",
              unit_size: "55 GAL/DRUM",
              description: "Su əsaslı məhlullarda səthi gərginliyi azaltmaq üçün spirt əsaslı maye köpük əleyhinə agent"
            },
            defoam_slc: {
              trade_name: "DEFOAM SLC",
              unit_size: "55 GAL/DRUM",
              description: "Silikon əsaslı maye köpük əleyhinə agent"
            }
          }
        }
      },
      water_base_page: {
        description: 'Su əsaslı qazma məhlulları suyun davamlı faza kimi istifadə edilməsi ilə hazırlanır. Bu məhlullar ekoloji cəhətdən təmiz, sərfəli və çoxfunksiyalı olub, geniş spektrli qazma tətbiqləri üçün uyğundur. Onlar quyu divarının yaxşı sabitliyini, əla fluid itkisi nəzarətini təmin edir və spesifik qazma şərtlərini asanlıqla tənzimlənə bilir.',
        table_headers_trade_name: 'Ticarət Adı',
        table_headers_fluid_type: 'Məhlul növü',
        table_headers_systems_description: 'Sistem təsviri',
        table_headers_application: 'Tətbiq sahəsi',
        table_1_title: 'Mülayim – Aktiv Şeyl/Gil üçün İnhibisiya Edilmiş HPWBM',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'Qazma məhlulunda gil dispersiyasının və reoloji xassələrin dəyişməsinin qarşısını almaq üçün yüksək molekul çəkili polimerlərdən ibarət HPWBM.',
        table_1_data_1_application: 'Yüksək reaktiv gil/şeyl qazmaq/sürətin artırılması. Quyu divarının stabilliyini artırır. Stabil quyu şəraitində ROP-u artırır.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'Aşağı və yüksək lay temperaturları ilə uyğunlaşan müxtəlif növ qlikol və inhibitor duzlardan istifadə edərək şeyl problemlərini aradan qaldırmaq üçün HPWBM.',
        table_1_data_2_application: 'Durulaşma sürətini azaldır. Burağın yapışmasını minimuma endirir. ROP-u artırır. Tork və sürtünməni azaldır.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'Şeyl stabilliyini yaxşılaşdırmaq, qazılmış bərk hissəciklərin dağılmasının qarşısını almaq və reaktiv şeyllərdə yüksək temperaturda su itkisini nəzarətdə saxlamağa kömək etmək üçün asfalt əlavələri ilə hazırlanmış HPWBM.',
        table_1_data_3_application: 'Quyu divarının stabilliyi/yüksək temperaturda su itkisini azaltmağa kömək edir. Durulaşma sürətini azaldır. ROP-u artırır. Tork və sürtünməni azaldır.',
        table_2_title: 'Yüksək Təzyiq Zonaları üçün Ağırlaşdırılmış HPWBM',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'BARA-WATE və HEMA WATE ağırlaşdırıcı agentləri, uyğun özlülük artırıcıları, su itkisinə nəzarət edən agentlər və temperatur stabilizatorlarından istifadə etməklə 2.4 S.G-ə qədər yüksək təzyiqli zonaları qazmaq üçün duzla doymuş su əsaslı məhlul.',
        table_2_data_1_application: '2.4 S.G-ə qədər dərin yüksək təzyiqli duzlu su zonasını qazmaq üçün. Kalsium və maqneziuma yüksək müqavimət. Yaxşı reoloji xassələr və yüksək temperaturda stabil gel möhkəmliyi.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'BARA-WATE və HEMA-WATE ağırlaşdırıcı agentləri, xüsusi reologiya nəzarət agentləri ilə 2.65 S.G-ə qədər yüksək təzyiqli zonaları qazarkən reoloji xassələri və su itkisini sabit saxlamaq üçün duzla doymuş su əsaslı məhlul.',
        table_2_data_2_application: '2.65 S.G-ə qədər dərin anormal yüksək təzyiqli duzlu su zonasını qazmaq üçün. Kalsium və maqneziuma yüksək müqavimət. Yaxşı reoloji xassələr və yüksək temperaturda stabil gel möhkəmliyi.',
        table_3_title: 'Yönəldilmiş, Horizontal və Genişləndirilmiş Çatışma Quyuları üçün Yüksək ROP HPWBM',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'Sürüşmə zamanı tork və sürtünməni azaltmaq və ROP-u yaxşılaşdırmaq üçün xüsusi yüksək performanslı sürtkü yağlarından istifadə etməklə yüksək yönəldilmiş və horizontal hissəni qazmaq üçün hazırlanmış HPWBM.',
        table_3_data_1_application: 'Horizontal və yüksək yönəldilmiş quyuları qazmaq üçün. Tork və sürtünməni/sürtünmə əmsalını azaldır. ROP-u yaxşılaşdırır. Diferensial yapışmanı azaldır.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'Biz, müştərilərimizin qazma fəaliyyətlərindəki mühəndislik və əməliyyat tələblərini ödəmək üçün geniş çeşidli qazma məhlulları mühəndislik həlləri təklif edirik.',
        description_2: 'Təcrübəli mühəndislərimiz aşağıdakı xidmətləri təqdim edərək layihələrinizə dəyər qata bilərlər:',
        services_title: 'Qazma Məhlulları Mühəndisliyi',
        service_1: 'Tamamlama və əsaslı təmir məhlullarının proqram dizaynı',
        service_2: 'Məhlul Dizaynı',
        service_3: 'Hidravlik və quyu təmizlənməsi dizaynı',
        service_4: 'Quyu divarının sabitliyinin öyrənilməsi',
        service_5: 'Qazma Problemlərinin Araşdırılması',
        service_6: 'Yekun quyu hesabatı və icmalı',
        advanced_title: 'Qabaqcıl Texnologiyalar və Tətbiqlər',
        advanced_1: 'Ümumi Məhlullar İdarəetmə Layihəsi',
        advanced_2: 'Əməliyyat İdarəetmə Layihəsi',
        advanced_3: 'Etalonlaşdırma və Performansın Qiymətləndirilməsi'
      },
      about_page: {
        certificates_title: "Sertifikatlar",
        best_in_the_world_title: "Dünyada Ən Yaxşı",
        best_in_the_world_text: "Yüksək keyfiyyətli xidmətlərimizlə dünya səviyyəsində liderik. Bizim peşəkar komandamız və innovativ həllərimizlə müştərilərimizə ən yaxşı nəticələri təqdim edirik.",
        stats_cases_solved: "Həll Olunmuş İşlər",
        stats_projects: "Layihələr",
        stats_happy_clients: "Məmnun Müştərilər",
        stats_yearly_profit: "İllik Gəlir"
      },
      slider: {
        title_1: "Qazma Məhlulları Mütəxəssisi",
        subtitle_1: "Neft-qaz sənayesində mükəmməl keyfiyyət",
        heading_1: "Təhlükəsizlik və Effektivlik",
        description_1: "Biz neft-qaz sənayesi üçün yüksək keyfiyyətli qazma və tamamlama məhlulları təmin edirik. Hər layihədə təhlükəsizlik və səmərəliliyi ön planda tuturuq.",
        title_2: "Həllərə Yönəlmiş Yanaşma",
        subtitle_2: "Fərqli qazma şərtlərinə uyğun həllər",
        heading_2: "Innovasiya və Mühəndislik",
        description_2: "Ən mürəkkəb qazma şərtlərinin öhdəsindən gələn innovativ məhlullar hazırlayırıq. Müştərilərimizin ehtiyaclarına uyğun fərdi mühəndislik həlləri təklif edirik.",
        title_3: "Qlobal Əhatə, Yerli Təcrübə",
        subtitle_3: "Qabaqcıl texnologiya ilə xidmətinizdə",
        heading_3: "Dayanıqlı Gələcək",
        description_3: "Qlobal təcrübəmizi yerli biliklərlə birləşdirərək dayanıqlı və etibarlı xidmətlər göstəririk. Ətraf mühitin qorunmasına xüsusi diqqət yetiririk."
      }
    }
  },
  en: {  hse: {
        title: "Health, Safety and Environment (HSE)",
        environmental_monitoring: "Environmental Monitoring",
        environmental_desc: "CDF's main activity in the field of environmental monitoring...",
        environmental_desc_full: "CDF's main activity in environmental monitoring is to measure and monitor harmful discharges into the environment in liquid and solid forms, determine their chemical composition, contamination levels, radioactivity, hydrobiological and physical characteristics, and apply a continuous control and research system.",
        environmental_policy: "Environmental Policy",
        employees_security: "Employee Safety",
        employees_security_desc: "Employee health and safety is our top priority.",
        employees_security_desc_full: "Employee health and safety is our top priority. We apply the highest standards to ensure a safe working environment, prevent occupational diseases, and minimize risks for all employees. With regular training, modern safety equipment, and strict protocols, we ensure the safety of every employee.",
        read_more: "Read More",
        no_results: "No results found"
      },
    translation: {
      about_us: {
        title: "Who We Are?",
        about_company: "Caspian Drilling Fluids (CDF) is an oil and gas engineering company focused on sales, designing drilling and completion fluids, engineering services and products.",
        description_1: "Drilling and completion fluids play a very important role in ensuring maximum hydrocarbon production, and we, as the CDF, supply the products and services necessary from the exploration phase to production to ensure optimum oil and gas production.",
        description_2: "Our company is a leading importer of organic chemicals into the Turkish domestic markets. We have storage facilities in the Istanbul and Adana regions. Supplying a broad range of products, we supply about 7% of the Turkish monomer and polymer market. At the same time, we also import chemical waste to our facilities in the Adana region."
      },
      home_page: {
        who_we_are: {
          title: "Who We Are?",
          text1: "Caspian Drilling Fluids (CDF) is an oil and gas engineering company focused on sales, designing drilling and completion fluids, engineering services and products.",
          text2: "Drilling and completion fluids play a very important role in ensuring maximum hydrocarbon production, and we, as the CDF, supply the products and services necessary from the exploration phase to production to ensure optimum oil and gas production.",
          text3: "Our company is a leading importer of organic chemicals into the Turkish domestic markets. We have storage facilities in the Istanbul and Adana regions. Supplying a broad range of products, we supply about 7% of the Turkish monomer and polymer market. At the same time, we also import chemical waste to our facilities in the Adana region."
        }
      },
      activitiesSection: {
        subtitle: 'ACTIVITIES',
        title: 'Our Activities',
        nonaqueousDrillingFluids: {
          title: 'Nonaqueous Drilling Fluids (OBM)',
          description: 'To meet the client’s highest level of inhibition, lubricity, thermal and chemical stability requirements, we offer a range of Nonaqueous Drilling Fluids systems, which are designed for challenging conditions. Our portfolio includes oil, diesel and synthetic-based drilling fluids, which are custom-designed for onshore and offshore complex technical applications.'
        },
        waterBaseDrillingFluids: {
          title: 'Water Base Drilling Fluids',
          description: 'These fluids are environmentally friendly, cost-effective, and versatile.'
        },
        completionAndWorkoverFluids: {
          title: 'Completion and Workover Fluids Services',
          description: 'The design of completion and workover fluids directly affects the integrity and lifespan of a well.'
        },
        drillingFluidsSimulation: {
          title: 'Drilling Fluids Simulation Software',
          description: 'Our experienced engineers can add value to your projects by providing the following services.'
        }
      },
      missionSection: {
        missionTitle: 'OUR MISSION',
        missionText: 'to be a leading fluids service provider by providing the highest quality and most modern products and services to local oil and gas companies in the region market.',
        highlightedText: 'CDF’s Goal',
        cardTitles: {
          projectManagementServices: {
            title: 'Project Management Services',
            subtitle: 'Services'
          },
          engineeringServices: {
            title: 'Engineering Services',
            subtitle: 'Services'
          },
          logisticServices: {
            title: 'Logistic Services',
            subtitle: 'Services'
          },
          warehouse: {
            title: 'Warehouse',
            subtitle: 'Services'
          }
        },
        readMore: 'Read More',
        stats: {
          projects: {
            label: 'Projects'
          },
          partners: {
            label: 'Partners'
          },
          years: {
            label: 'Years'
          },
          countries: {
            label: 'Countries'
          }
        }
      },
      hseSection: {
        category: 'Health, Safety and Environment',
        environmentalMonitoring: {
          title: 'Environmental Monitoring'
        },
        employeesSecurity: {
          title: 'Employees’ Security'
        },
        readMore: 'Read More'
      },
      productsSection: {
        category: 'PRODUCTS',
        title: 'Our Products',
        completionAndWorkoverAdditives: {
          title: 'Completion and Workover Fluids Additives'
        },
        drillingFluidAdditives: {
          title: 'Drilling Fluid Additives'
        },
        readMore: 'Read More'
      },
      header: {
        home: 'Home',
        activities: 'Activities',
        products: 'Products',
        hse: 'Health, Safety and Environment',
        about_us: 'About Us'
      },
      activities: {
        nonaqueous_drilling_fluids_obm: "Nonaqueous Drilling Fluids (OBM)",
        water_base_drilling_fluids: "Water Base Drilling Fluids",
        completion_workover_fluids_services: "Completion and Workover Fluids Services",
        drilling_fluids_simulation_software: "Drilling Fluids Simulation Software",
        submersible_electric_centrifugal_pumps_and_submersible_electric_motors_for_esp_drive_evn: "Submersible Electric Centrifugal Pumps and Submersible Electric Motors for ESP drive (EVN)",
        central_laboratory: "Central Laboratory",
        warehouse: "Warehouse",
        logistic_services: "Logistic Services",
        engineering_services: "Engineering Services",
        project_management_services: "Project Management Services",
        nonaqueous_drilling_fluids_obm_title: 'Nonaqueous Drilling Fluids (OBM)',
        nonaqueous_drilling_fluids_obm_text_1: 'To meet the client’s highest level of inhibition, lubricity, thermal and chemical stability requirements, we offer a range of Nonaqueous Drilling Fluids systems, which are designed for challenging conditions.',
        nonaqueous_drilling_fluids_obm_text_2: 'Our portfolio includes oil, diesel and synthetic-based drilling fluids, which are custom-designed for onshore and offshore complex technical applications.',
        central_laboratory_title: 'Central Laboratory',
        central_laboratory_text_1: 'The new CDF Central Laboratory is located in Garadagh District, Baku city. The laboratory is mainly equipped with OFITE and FANN manufactured equipment that meets API (American Petroleum Institute) standards.',
        central_laboratory_text_2: 'All equipment used in the laboratory is calibrated annually by the Azerbaijan State Metrology Institute.',
        central_laboratory_main_functions: 'Main functions',
        central_laboratory_list_1: 'Analysis and quality control of water-based drilling fluids.',
        central_laboratory_list_2: 'Analysis and quality control of oil-based drilling fluids.',
        central_laboratory_list_3: 'Analysis and quality control of completion and workover fluids.',
        central_laboratory_list_4: 'Calibration of laboratory equipment.',
        central_laboratory_list_5: 'Analysis of formation water.',
        central_laboratory_list_6: 'Incoming control (quality control of incoming products).',
        central_laboratory_list_7: 'Testing of new products.',
        get_in_touch: 'Get in touch',
        name: 'Name, surname',
        email: 'Email',
        message: 'Message',
        contact_info: 'Contact Information',
        water_base_drilling_fluids_title: 'Water Base Drilling Fluids',
        completion_workover_fluids_title: 'Completion and Workover Fluids Services',
        completion_workover_fluids_text_1: 'The design of completion and workover fluids directly affects the integrity and lifespan of a well.',
        completion_workover_fluids_text_2: 'A good fluid will minimize operational work, reduce corrosion rates, and prevent damage to downhole tools. In addition, we evaluate the compatibility of completion and workover fluids with formation water properties to minimize the entry of damaging substances into the well.',
        simulation_software_title: 'Drilling Fluids Simulation Software',
        simulation_software_text_1: 'We offer a wide range of drilling fluids engineering solutions to meet the engineering and operational requirements of our clients\' drilling activities.',
        simulation_software_text_2: 'Our experienced engineers can add value to your projects by providing the following services:',
        simulation_software_list_1: 'Drilling Fluids Engineering',
        simulation_software_list_2: 'Completion and Workover Fluids Design Program',
        simulation_software_list_3: 'Hydraulic and Wellbore Cleaning Design',
        simulation_software_list_4: 'Wellbore Stability Study',
        simulation_software_list_5: 'Investigation of Drilling Problems',
        simulation_software_list_6: 'Final Well Report and Summary',
        simulation_software_list_7: 'Advanced Technologies and Applications',
        simulation_software_list_8: 'Total Fluids Management Project',
        simulation_software_list_9: 'Benchmarking and Performance Evaluation',
        warehouse_title: 'Warehouse',
        warehouse_text: 'CDF has a 2400 square meter warehouse for the safe storage of chemicals and other service goods. The warehouse staff, like all other employees, have undergone HSE training.',
        logistic_services_title: 'Logistic Services',
        logistic_services_text_1: 'CDF is a global logistics solutions provider. The company prides itself on its attention to detail, creative and innovative problem-solving skills, and responsiveness to clients. CDF offers professionalism in the field of international logistics services, including:',
        logistic_services_list_1: 'Transportation management',
        logistic_services_list_2: 'Logistics management',
        logistic_services_list_3: 'International delivery',
        logistic_services_list_4: 'Domestic delivery',
        logistic_services_list_5: 'Customs clearance',
        engineering_services_title: 'Engineering Services',
        engineering_services_text_1: 'CDF\'s engineering team assists our clients with the planning, design, and construction of their projects. CDF uses the latest technology to prepare and track engineering packages. Our engineering services include:',
        engineering_services_list_1: 'Pre-FEED studies',
        engineering_services_list_2: 'FEED studies',
        engineering_services_list_3: 'Debottlenecking',
        engineering_services_list_4: 'Optimization studies',
        engineering_services_list_5: 'Plant design',
        engineering_services_list_6: 'Improvements',
        engineering_services_list_7: 'Retrofits',
        project_management_title: 'Project Management Services',
        project_management_text_1: 'CDF helps our clients with project planning and control to ensure that projects are completed on time and within budget. Our Project Managers have extensive international experience in project organization and management.',
        project_management_text_2: 'CDF plans and allocates project resources, prepares budgets, tracks progress, and keeps stakeholders informed throughout the project. Our Project Management Services give our clients the information and support they need to ensure their projects are successful.',
        project_management_list_1: 'Project planning',
        project_management_list_2: 'Project execution',
        project_management_list_3: 'Risk management',
        project_management_list_4: 'Budget control',
        project_management_list_5: 'Time management',
        project_management_list_6: 'Resource management',
        project_management_list_7: 'Stakeholder relationship management'
      },
      products: {
        drilling_additives: 'Drilling Fluid Additives',
        completion_additives: 'Completion and Workover Fluids Additives'
      },
      hse: {
        environmental: 'Environmental Monitoring',
        employees_security: 'Employees’ Security'
      },
      activities_page: {
        title: 'Our Activities',
        subtitle: 'Learn more about our services',
        search_placeholder: 'Search activity',
        no_results: 'No results found'
      },
      water_base_page: {
        description: 'Water-based drilling fluids are formulated using water as the continuous phase. They are environmentally friendly, cost-effective, and versatile, making them suitable for a wide range of drilling applications. They provide good wellbore stability, excellent fluid loss control, and can be easily adjusted to specific drilling conditions.',
        table_headers_trade_name: 'Trade Name',
        table_headers_fluid_type: 'Fluid Type',
        table_headers_systems_description: 'Systems Description',
        table_headers_application: 'Application',
        table_1_title: 'Inhibited HPWBM for Mild-Active Shale/Clay',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'HPWBM based on high molecular weight polymers to prevent clay dispersion and changes in drilling fluid rheology.',
        table_1_data_1_application: 'Drilling highly reactive clay/shale / increasing rate. Improves wellbore stability. Increases ROP under stable well conditions.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'HPWBM to combat shale problems using various types of glycol and inhibitor salts compatible with low and high reservoir temperatures.',
        table_1_data_2_application: 'Reduces dilution rate. Minimizes bit sticking. Increases ROP. Reduces torque and drag.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'HPWBM formulated with asphalt additives to improve shale stability, prevent the breakdown of drilled solids, and help control high-temperature water loss in reactive shales.',
        table_1_data_3_application: 'Helps with wellbore stability/high-temperature water loss control. Reduces dilution rate. Increases ROP. Reduces torque and drag.',
        table_2_title: 'Weighted HPWBM for High-Pressure Zones',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'Salt-saturated water-based fluid using BARA-WATE and HEMA WATE weighting agents, suitable viscosifiers, fluid loss control agents, and temperature stabilizers for drilling high-pressure zones up to 2.4 S.G.',
        table_2_data_1_application: 'For drilling deep high-pressure saltwater zones up to 2.4 S.G. High resistance to calcium and magnesium. Good rheological properties and stable gel strength at high temperatures.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'Salt-saturated water-based fluid using BARA-WATE and HEMA-WATE weighting agents with special rheology control agents to keep rheological properties and fluid loss stable while drilling high-pressure zones up to 2.65 S.G.',
        table_2_data_2_application: 'For drilling deep abnormally high-pressure saltwater zones up to 2.65 S.G. High resistance to calcium and magnesium. Good rheological properties and stable gel strength at high temperatures.',
        table_3_title: 'High ROP HPWBM for Directional, Horizontal and Extended Reach Wells',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'HPWBM formulated for drilling highly directional and horizontal sections using special high-performance lubricants to reduce torque and drag during sliding and improve ROP.',
        table_3_data_1_application: 'For drilling horizontal and highly directional wells. Reduces torque and drag/coefficient of friction. Improves ROP. Reduces differential sticking.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'We offer a wide range of drilling fluids engineering solutions to meet the engineering and operational requirements of our clients\' drilling activities.',
        description_2: 'Our experienced engineers can add value to your projects by providing the following services:',
        services_title: 'Drilling Fluids Engineering',
        service_1: 'Completion and Workover Fluids Program Design',
        service_2: 'Fluid Design',
        service_3: 'Hydraulic and wellbore cleaning design',
        service_4: 'Wellbore stability study',
        service_5: 'Investigation of Drilling Problems',
        service_6: 'Final well report and summary',
        advanced_title: 'Advanced Technologies and Applications',
        advanced_1: 'Total Fluids Management Project',
        advanced_2: 'Operational Management Project',
        advanced_3: 'Benchmarking and Performance Evaluation'
      },
      about_page: {
        certificates_title: "Certificates",
        best_in_the_world_title: "Best in the World",
        best_in_the_world_text: "We are a world leader in high-quality services. With our professional team and innovative solutions, we provide our customers with the best results.",
        stats_cases_solved: "Cases Solved",
        stats_projects: "Projects",
        stats_happy_clients: "Happy Clients",
        stats_yearly_profit: "Yearly Profit"
      },
      slider: {
        title_1: "Drilling Fluids Specialist",
        subtitle_1: "Perfect quality in the oil and gas industry",
        heading_1: "Safety and Efficiency",
        description_1: "We provide high-quality drilling and completion fluids for the oil and gas industry. We prioritize safety and efficiency in every project.",
        title_2: "Solution-Oriented Approach",
        subtitle_2: "Solutions tailored to different drilling conditions",
        heading_2: "Innovation and Engineering",
        description_2: "We develop innovative fluids that meet the most complex drilling conditions. We offer customized engineering solutions to meet our clients' needs.",
        title_3: "Global Reach, Local Expertise",
        subtitle_3: "At your service with advanced technology",
        heading_3: "Sustainable Future",
        description_3: "We combine our global experience with local knowledge to provide sustainable and reliable services. We pay special attention to protecting the environment."
      },
      products_page: {
        drilling_fluid_additives: {
          title: "Drilling Fluid Additives",
          description: "Drilling fluid additives are specialized chemicals or materials added to drilling fluids to enhance or modify their properties and performance during drilling operations. These additives serve various functions and can improve aspects such as fluid viscosity, lubricity, filtration control, shale inhibition, and thermal stability. They help optimize drilling efficiency, protect the wellbore, and ensure safe and effective drilling in diverse geological formations and conditions.",
          table_headers: {
            trade_name: "Trade Name",
            unit_size: "Unit Size",
            description: "Description"
          },
          products: {
            clay_bond_l: {
              trade_name: "CLAY BOND L",
              unit_size: "55 GAL/CAN",
              description: "Providing shale stabilization and cutting encapsulation"
            },
            n_inhibit: {
              trade_name: "N-INHIBIT",
              unit_size: "55 GAL/DRUM",
              description: "Highly inhibitive, highly lubricious Nano-shale inhibitor in order to replace KCL in high reactive shale/clays"
            },
            well_stab: {
              trade_name: "WELL-STAB",
              unit_size: "55 GAL/DRUM",
              description: "Mixture of chemicals to improve wellbore stability"
            },
            shale_drill: {
              trade_name: "SHALE-DRILL",
              unit_size: "55 GAL/DRUM",
              description: "Wellbore stabilizer, lubricity & high filtration control agent"
            },
            emo_block: {
              trade_name: "EMO-BLOCK",
              unit_size: "55 GAL/DRUM",
              description: "Semi permeable membrane Shale Inhibitor"
            },
            h2s_scav_l: {
              trade_name: "H2S SCAV L",
              unit_size: "55 GAL/DRUM",
              description: "Liquid hydrogen sulfide scavenger used in WBM"
            },
            glyco_drill_gp: {
              trade_name: "GLYCO-DRILL GP",
              unit_size: "55 GAL/DRUM",
              description: "Providing good shale control performance, increasing cuttings hardness"
            },
            well_sweep: {
              trade_name: "WELL-SWEEP",
              unit_size: "12.5 KG/SX",
              description: "Hi-Vis Pill/Sweeping fluid to provide high efficient hole cleaning and cuttings carrying"
            },
            hixo_drill: {
              trade_name: "HIXO-Drill",
              unit_size: "25 KG/SX",
              description: "Thixotropic agents for polymers/clays"
            },
            rheo_stab: {
              trade_name: "RHEO-STAB",
              unit_size: "55 GAL/DRUM",
              description: "Rheology Stabilizing agent"
            },
            rop_enhancer_hc: {
              trade_name: "ROP Enhancer (HC)",
              unit_size: "55 GAL/DRUM",
              description: "Blended organic surface active agents for enhancing rate of penetration in high clay content formations"
            },
            eco_lube_hp: {
              trade_name: "ECO Lube HP",
              unit_size: "55 GAL/DRUM",
              description: "Providing impart extreme lubricity properties to drilling fluids"
            },
            pipe_free_mp: {
              trade_name: "PIPE-Free MP",
              unit_size: "55 GAL/DRUM",
              description: "Anti-eclipse additive"
            },
            bit_wash: {
              trade_name: "BIT-WASH",
              unit_size: "55 GAL/DRUM",
              description: "High Performance Bit-Balling Removal Agent"
            }
          }
        },
        completion_and_workover_fluids_additives: {
          title: "Completion and Workover Fluids Additives",
          description: "Completion and workover fluid additives are specialized chemicals or substances incorporated into completion and workover fluids to enhance their performance and properties. These additives are crucial in optimizing the efficiency, safety, and effectiveness of completion and workover operations in oil and gas wells.",
          table_headers: {
            trade_name: "Trade Name",
            unit_size: "Unit Size",
            description: "Description"
          },
          products: {
            anti_crystaline: {
              trade_name: "ANTI-CRYSTALINE",
              unit_size: "25 KG/SX",
              description: "Crystallization Inhibitors for Brine"
            },
            calcium_bromide_l: {
              trade_name: "CALCIUM BROMIDE L",
              unit_size: "55 GAL/DRUM",
              description: "A single salt clear brine fluid of 14.2 lbs/gal density"
            },
            calcium_bromide_p: {
              trade_name: "CALCIUM BROMIDE P",
              unit_size: "25 KG/SX",
              description: "Calcium salt of hydrobromic acid. Concentrated hygroscopic powder that absorbs water from the air"
            },
            forma_drill_ii_l: {
              trade_name: "FORMA-DRILL II-L",
              unit_size: "1000 Lit/IBC",
              description: "Formate Brine – Potassium Base – 1.57 S.G"
            },
            sodium_bromide_l: {
              trade_name: "SODIUM BROMIDE L",
              unit_size: "55 GAL/DRUM",
              description: "A single salt clear brine fluid (liquid grade 1.3 S.G)"
            },
            zinc_bromide: {
              trade_name: "ZINC BROMIDE",
              unit_size: "55 GAL/DRUM",
              description: "A clear solid-free brine fluid with a minimum density of 1.92 SG"
            },
            well_clean: {
              trade_name: "WELL-CLEAN",
              unit_size: "55 GAL/DRUM",
              description: "Well clean-up agent"
            },
            bio_mcb: {
              trade_name: "BIO MCB",
              unit_size: "55 GAL/DRUM",
              description: "Filter cake breaker"
            },
            brine_cor_hp: {
              trade_name: "BRINE-COR HP",
              unit_size: "55 GAL/DRUM",
              description: "High active, water-soluble corrosion inhibitor"
            },
            ox_scav_l: {
              trade_name: "OX-SCAV L",
              unit_size: "55 GAL/DRUM",
              description: "Liquid oxygen scavenger"
            },
            pipe_cor: {
              trade_name: "PIPE-COR",
              unit_size: "55 GAL/DRUM",
              description: "Corrosion inhibitor – spray type"
            },
            clean_surf: {
              trade_name: "CLEAN SURF",
              unit_size: "55 GAL/DRUM",
              description: "Mixture of emulsifiers to improve water-wetting of barite and other mud solids"
            },
            defoam_alc: {
              trade_name: "DEFOAM ALC",
              unit_size: "55 GAL/DRUM",
              description: "Alcohol-based liquid defoamer to reduce surface tension in WBM"
            },
            defoam_slc: {
              trade_name: "DEFOAM SLC",
              unit_size: "55 GAL/DRUM",
              description: "Silicone-based liquid defoaming agent"
            }
          }
        }
      },
      water_base_page: {
        description: 'Water-based drilling fluids are formulated using water as the continuous phase. They are environmentally friendly, cost-effective, and versatile, making them suitable for a wide range of drilling applications. They provide good wellbore stability, excellent fluid loss control, and can be easily adjusted to specific drilling conditions.',
        table_headers_trade_name: 'Trade Name',
        table_headers_fluid_type: 'Fluid Type',
        table_headers_systems_description: 'Systems Description',
        table_headers_application: 'Application',
        table_1_title: 'Inhibited HPWBM for Mild-Active Shale/Clay',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'HPWBM based on high molecular weight polymers to prevent clay dispersion and changes in drilling fluid rheology.',
        table_1_data_1_application: 'Drilling highly reactive clay/shale / increasing rate. Improves wellbore stability. Increases ROP under stable well conditions.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'HPWBM to combat shale problems using various types of glycol and inhibitor salts compatible with low and high reservoir temperatures.',
        table_1_data_2_application: 'Reduces dilution rate. Minimizes bit sticking. Increases ROP. Reduces torque and drag.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'HPWBM formulated with asphalt additives to improve shale stability, prevent the breakdown of drilled solids, and help control high-temperature water loss in reactive shales.',
        table_1_data_3_application: 'Helps with wellbore stability/high-temperature water loss control. Reduces dilution rate. Increases ROP. Reduces torque and drag.',
        table_2_title: 'Weighted HPWBM for High-Pressure Zones',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'Salt-saturated water-based fluid using BARA-WATE and HEMA WATE weighting agents, suitable viscosifiers, fluid loss control agents, and temperature stabilizers for drilling high-pressure zones up to 2.4 S.G.',
        table_2_data_1_application: 'For drilling deep high-pressure saltwater zones up to 2.4 S.G. High resistance to calcium and magnesium. Good rheological properties and stable gel strength at high temperatures.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'Salt-saturated water-based fluid using BARA-WATE and HEMA-WATE weighting agents with special rheology control agents to keep rheological properties and fluid loss stable while drilling high-pressure zones up to 2.65 S.G.',
        table_2_data_2_application: 'For drilling deep abnormally high-pressure saltwater zones up to 2.65 S.G. High resistance to calcium and magnesium. Good rheological properties and stable gel strength at high temperatures.',
        table_3_title: 'High ROP HPWBM for Directional, Horizontal and Extended Reach Wells',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'HPWBM formulated for drilling highly directional and horizontal sections using special high-performance lubricants to reduce torque and drag during sliding and improve ROP.',
        table_3_data_1_application: 'For drilling horizontal and highly directional wells. Reduces torque and drag/coefficient of friction. Improves ROP. Reduces differential sticking.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'We offer a wide range of drilling fluids engineering solutions to meet the engineering and operational requirements of our clients\' drilling activities.',
        description_2: 'Our experienced engineers can add value to your projects by providing the following services:',
        services_title: 'Drilling Fluids Engineering',
        service_1: 'Completion and Workover Fluids Program Design',
        service_2: 'Fluid Design',
        service_3: 'Hydraulic and wellbore cleaning design',
        service_4: 'Wellbore stability study',
        service_5: 'Investigation of Drilling Problems',
        service_6: 'Final well report and summary',
        advanced_title: 'Advanced Technologies and Applications',
        advanced_1: 'Total Fluids Management Project',
        advanced_2: 'Operational Management Project',
        advanced_3: 'Benchmarking and Performance Evaluation'
      },
      about_page: {
        certificates_title: "Certificates",
        best_in_the_world_title: "Best in the World",
        best_in_the_world_text: "We are a world leader in high-quality services. With our professional team and innovative solutions, we provide our customers with the best results.",
        stats_cases_solved: "Cases Solved",
        stats_projects: "Projects",
        stats_happy_clients: "Happy Clients",
        stats_yearly_profit: "Yearly Profit"
      },
      slider: {
        title_1: "Drilling Fluids Specialist",
        subtitle_1: "Perfect quality in the oil and gas industry",
        heading_1: "Safety and Efficiency",
        description_1: "We provide high-quality drilling and completion fluids for the oil and gas industry. We prioritize safety and efficiency in every project.",
        title_2: "Solution-Oriented Approach",
        subtitle_2: "Solutions tailored to different drilling conditions",
        heading_2: "Innovation and Engineering",
        description_2: "We develop innovative fluids that meet the most complex drilling conditions. We offer customized engineering solutions to meet our clients' needs.",
        title_3: "Global Reach, Local Expertise",
        subtitle_3: "At your service with advanced technology",
        heading_3: "Sustainable Future",
        description_3: "We combine our global experience with local knowledge to provide sustainable and reliable services. We pay special attention to protecting the environment."
      },
    }
  },
  ru: {   hse: {
        title: "Охрана труда, здоровья и окружающей среды (HSE)",
        environmental_monitoring: "Мониторинг окружающей среды",
        environmental_desc: "Основная деятельность CDF в области мониторинга окружающей среды...",
        environmental_desc_full: "Основная деятельность CDF заключается в измерении и контроле вредных выбросов в окружающую среду в жидкой и твердой форме, определении их химического состава, степени загрязнения, радиоактивности, гидробиологических и физических характеристик и применении системы постоянного контроля и исследований.",
        environmental_policy: "Экологическая политика",
        employees_security: "Безопасность сотрудников",
        employees_security_desc: "Здоровье и безопасность сотрудников – наш главный приоритет.",
        employees_security_desc_full: "Здоровье и безопасность сотрудников – наш главный приоритет. Мы применяем самые высокие стандарты для обеспечения безопасных условий труда, предотвращения профессиональных заболеваний и минимизации рисков для всех сотрудников. С помощью регулярных тренингов, современного оборудования и строгих протоколов мы гарантируем безопасность каждого сотрудника.",
        read_more: "Подробнее",
        no_results: "Ничего не найдено"
      },
    translation: {
      about_us: {
        title: "Кто мы?",
        about_company: "Caspian Drilling Fluids (CDF) – это нефтегазовая инжиниринговая компания, специализирующаяся на продаже, проектировании, инженерных услугах и продукции для буровых растворов и растворов для заканчивания скважин.",
        description_1: "Буровые растворы и растворы для заканчивания играют очень важную роль в обеспечении максимальной добычи углеводородов, и мы, как CDF, предоставляем необходимые продукты и услуги от этапа разведки до добычи, чтобы обеспечить оптимальную добычу нефти и газа.",
        description_2: "Наша компания является ведущим импортером органических химикатов на внутренний рынок Турции. У нас есть складские помещения в регионах Стамбула и Аданы. Поставляя широкий спектр продукции, мы обеспечиваем около 7% турецкого рынка мономеров и полимеров. В то же время мы также импортируем химические отходы на наши объекты в регионе Аданы."
      },
      home_page: {
        who_we_are: {
          title: "Кто мы?",
          text1: "Caspian Drilling Fluids (CDF) – это нефтегазовая инжиниринговая компания, специализирующаяся на продаже, проектировании, инженерных услугах и продукции для буровых растворов и растворов для заканчивания скважин.",
          text2: "Буровые растворы и растворы для заканчивания играют очень важную роль в обеспечении максимальной добычи углеводородов, и мы, как CDF, предоставляем необходимые продукты и услуги от этапа разведки до добычи, чтобы обеспечить оптимальную добычу нефти и газа.",
          text3: "Наша компания является ведущим импортером органических химикатов на внутренний рынок Турции. У нас есть складские помещения в регионах Стамбула и Аданы. Поставляя широкий спектр продукции, мы обеспечиваем около 7% турецкого рынка мономеров и полимеров. В то же время мы также импортируем химические отходы на наши объекты в регионе Аданы."
        }
      },
      activitiesSection: {
        subtitle: 'ВИДЫ ДЕЯТЕЛЬНОСТИ',
        title: 'Наша Деятельность',
        nonaqueousDrillingFluids: {
          title: 'Буровые растворы на неводной основе (OBM)',
          description: 'Чтобы удовлетворить высочайшие требования клиентов к ингибированию, смазывающей способности, термической и химической стабильности, мы предлагаем ряд систем буровых растворов на неводной основе, предназначенных для сложных условий. Наш портфель включает буровые растворы на нефтяной, дизельной и синтетической основе, специально разработанные для сложных технических задач на суше и на море.'
        },
        waterBaseDrillingFluids: {
          title: 'Буровые растворы на водной основе',
          description: 'Эти растворы являются экологически чистыми, экономически выгодными и универсальными.'
        },
        completionAndWorkoverFluids: {
          title: 'Растворы для заканчивания скважин и капитального ремонта',
          description: 'Проектирование растворов для заканчивания и капитального ремонта скважин напрямую влияет на целостность и срок службы скважины.'
        },
        drillingFluidsSimulation: {
          title: 'Программное обеспечение для моделирования буровых растворов',
          description: 'Наши опытные инженеры могут повысить ценность ваших проектов, предоставляя следующие услуги.'
        }
      },
      missionSection: {
        missionTitle: 'НАША МИССИЯ',
        missionText: 'стать ведущим поставщиком растворов для бурения, предоставляя местным нефтегазовым компаниям на региональном рынке самые качественные и современные продукты и услуги.',
        highlightedText: 'Цель CDF',
        cardTitles: {
          projectManagementServices: {
            title: 'Услуги по управлению проектами',
            subtitle: 'Услуги'
          },
          engineeringServices: {
            title: 'Инженерные услуги',
            subtitle: 'Услуги'
          },
          logisticServices: {
            title: 'Логистические услуги',
            subtitle: 'Услуги'
          },
          warehouse: {
            title: 'Склад',
            subtitle: 'Услуги'
          }
        },
        readMore: 'Читать Далее',
        stats: {
          projects: {
            label: 'Проекты'
          },
          partners: {
            label: 'Партнеры'
          },
          years: {
            label: 'Лет'
          },
          countries: {
            label: 'Страны'
          }
        }
      },
      hseSection: {
        category: 'Здоровье, Безопасность и Окружающая Среда',
        environmentalMonitoring: {
          title: 'Мониторинг окружающей среды'
        },
        employeesSecurity: {
          title: 'Безопасность сотрудников'
        },
        readMore: 'Читать Далее'
      },
      productsSection: {
        category: 'ПРОДУКЦИЯ',
        title: 'Наша Продукция',
        completionAndWorkoverAdditives: {
          title: 'Присадки к растворам для заканчивания и капитального ремонта'
        },
        drillingFluidAdditives: {
          title: 'Присадки к буровым растворам'
        },
        readMore: 'Читать Далее'
      },
      header: {
        home: 'Главная',
        activities: 'Виды деятельности',
        products: 'Продукция',
        hse: 'Здоровье, Безопасность и Окружающая Среда',
        about_us: 'О нас'
      },
      activities: {
        nonaqueous_drilling_fluids_obm: "Буровые растворы на неводной основе (OBM)",
        water_base_drilling_fluids: "Буровые растворы на водной основе",
        completion_workover_fluids_services: "Растворы для заканчивания скважин и капитального ремонта",
        drilling_fluids_simulation_software: "Программное обеспечение для моделирования буровых растворов",
        submersible_electric_centrifugal_pumps_and_submersible_electric_motors_for_esp_drive_evn: "Погружные электрические центробежные насосы и погружные электродвигатели для привода ESP (EVN)",
        central_laboratory: "Центральная лаборатория",
        warehouse: "Склад",
        logistic_services: "Логистические услуги",
        engineering_services: "Инженерные услуги",
        project_management_services: "Услуги по управлению проектами",
        nonaqueous_drilling_fluids_obm_title: 'Буровые растворы на неводной основе (OBM)',
        nonaqueous_drilling_fluids_obm_text_1: 'Чтобы удовлетворить высочайшие требования клиентов к ингибированию, смазывающей способности, термической и химической стабильности, мы предлагаем ряд систем буровых растворов на неводной основе, предназначенных для сложных условий.',
        nonaqueous_drilling_fluids_obm_text_2: 'Наш портфель включает буровые растворы на нефтяной, дизельной и синтетической основе, специально разработанные для сложных технических задач на суше и на море.',
        central_laboratory_title: 'Центральная лаборатория',
        central_laboratory_text_1: 'Новая Центральная лаборатория CDF расположена в Гарадагском районе города Баку. Лаборатория в основном оснащена оборудованием производства OFITE и FANN, соответствующим стандартам API (Американский институт нефти).',
        central_laboratory_text_2: 'Все оборудование, используемое в лаборатории, ежегодно калибруется в Азербайджанском государственном институте метрологии.',
        central_laboratory_main_functions: 'Основные функции',
        central_laboratory_list_1: 'Анализ и контроль качества буровых растворов на водной основе.',
        central_laboratory_list_2: 'Анализ и контроль качества буровых растворов на нефтяной основе.',
        central_laboratory_list_3: 'Анализ и контроль качества растворов для заканчивания и капитального ремонта скважин.',
        central_laboratory_list_4: 'Калибровка лабораторного оборудования.',
        central_laboratory_list_5: 'Анализ пластовых вод.',
        central_laboratory_list_6: 'Входной контроль (контроль качества поступающей продукции).',
        central_laboratory_list_7: 'Тестирование новой продукции.',
        get_in_touch: 'Связаться с нами',
        name: 'Имя, фамилия',
        email: 'Электронная почта',
        message: 'Сообщение',
        contact_info: 'Контактная информация',
        water_base_drilling_fluids_title: 'Буровые растворы на водной основе',
        completion_workover_fluids_title: 'Растворы для заканчивания скважин и капитального ремонта',
        completion_workover_fluids_text_1: 'Проектирование растворов для заканчивания и капитального ремонта скважин напрямую влияет на целостность и срок службы скважины.',
        completion_workover_fluids_text_2: 'Хороший раствор сведет к минимуму эксплуатационные работы, снизит скорость коррозии и предотвратит повреждение внутрискважинных инструментов. Кроме того, мы оцениваем совместимость растворов для заканчивания и капитального ремонта с характеристиками пластовой воды, чтобы минимизировать попадание вредных веществ в скважину.',
        simulation_software_title: 'Программное обеспечение для моделирования буровых растворов',
        simulation_software_text_1: 'Мы предлагаем широкий спектр инженерных решений для буровых растворов, чтобы удовлетворить инженерные и эксплуатационные требования буровых работ наших клиентов.',
        simulation_software_text_2: 'Наши опытные инженеры могут повысить ценность ваших проектов, предоставляя следующие услуги:',
        simulation_software_list_1: 'Инжиниринг буровых растворов',
        simulation_software_list_2: 'Программа проектирования растворов для заканчивания и капитального ремонта',
        simulation_software_list_3: 'Проектирование гидравлики и очистки скважины',
        simulation_software_list_4: 'Изучение стабильности ствола скважины',
        simulation_software_list_5: 'Исследование проблем бурения',
        simulation_software_list_6: 'Итоговый отчет и сводка по скважине',
        simulation_software_list_7: 'Передовые технологии и приложения',
        simulation_software_list_8: 'Проект по комплексному управлению растворами',
        simulation_software_list_9: 'Сравнительный анализ и оценка производительности',
        warehouse_title: 'Склад',
        warehouse_text: 'CDF имеет склад площадью 2400 квадратных метров для безопасного хранения химикатов и других сервисных товаров. Персонал склада, как и все остальные сотрудники, прошел обучение по технике безопасности и охране окружающей среды (HSE).',
        logistic_services_title: 'Логистические услуги',
        logistic_services_text_1: 'CDF является глобальным поставщиком логистических решений. Компания гордится своим вниманием к деталям, творческим и инновационным подходом к решению проблем и отзывчивостью к клиентам. CDF предлагает профессионализм в области международных логистических услуг, включая:',
        logistic_services_list_1: 'Управление транспортом',
        logistic_services_list_2: 'Управление логистикой',
        logistic_services_list_3: 'Международная доставка',
        logistic_services_list_4: 'Внутренняя доставка',
        logistic_services_list_5: 'Таможенное оформление',
        engineering_services_title: 'Инженерные услуги',
        engineering_services_text_1: 'Инженерная команда CDF помогает нашим клиентам с планированием, проектированием и строительством их проектов. CDF использует новейшие технологии для подготовки и отслеживания инженерных пакетов. Наши инженерные услуги включают:',
        engineering_services_list_1: 'Исследования Pre-FEED',
        engineering_services_list_2: 'Исследования FEED',
        engineering_services_list_3: 'Устранение «узких мест»',
        engineering_services_list_4: 'Исследования по оптимизации',
        engineering_services_list_5: 'Проектирование завода',
        engineering_services_list_6: 'Улучшения',
        engineering_services_list_7: 'Модернизация (retrofits)',
        project_management_title: 'Услуги по управлению проектами',
        project_management_text_1: 'CDF помогает нашим клиентам с планированием и контролем проектов, чтобы обеспечить их завершение в срок и в рамках бюджета. Наши менеджеры проектов обладают обширным международным опытом в области организации и управления проектами.',
        project_management_text_2: 'CDF планирует и распределяет ресурсы проекта, готовит бюджеты, отслеживает прогресс и информирует заинтересованные стороны на протяжении всего проекта. Наши услуги по управлению проектами предоставляют нашим клиентам информацию и поддержку, необходимые для успешного завершения их проектов.',
        project_management_list_1: 'Планирование проекта',
        project_management_list_2: 'Выполнение проекта',
        project_management_list_3: 'Управление рисками',
        project_management_list_4: 'Контроль бюджета',
        project_management_list_5: 'Управление временем',
        project_management_list_6: 'Управление ресурсами',
        project_management_list_7: 'Управление взаимоотношениями с заинтересованными сторонами'
      },
      products: {
        drilling_additives: 'Присадки к буровым растворам',
        completion_additives: 'Присадки к растворам для заканчивания и капитального ремонта'
      },
      hse: {
        environmental: 'Мониторинг окружающей среды',
        employees_security: 'Безопасность сотрудников'
      },
      activities_page: {
        title: 'Наша Деятельность',
        subtitle: 'Узнайте больше о наших услугах',
        search_placeholder: 'Поиск деятельности',
        no_results: 'Ничего не найдено'
      },
      water_base_page: {
        description: 'Буровые растворы на водной основе изготавливаются с использованием воды в качестве непрерывной фазы. Они экологически чистые, экономически выгодные и универсальные, что делает их подходящими для широкого спектра буровых работ. Они обеспечивают хорошую стабильность ствола скважины, превосходный контроль потери фильтрата и могут быть легко адаптированы к конкретным условиям бурения.',
        table_headers_trade_name: 'Торговое название',
        table_headers_fluid_type: 'Тип раствора',
        table_headers_systems_description: 'Описание систем',
        table_headers_application: 'Область применения',
        table_1_title: 'Ингибированный HPWBM для умеренно-активных сланцев/глины',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'HPWBM на основе полимеров с высокой молекулярной массой для предотвращения дисперсии глины и изменения реологических свойств бурового раствора.',
        table_1_data_1_application: 'Бурение высокореактивной глины/сланца / увеличение скорости. Улучшает стабильность ствола скважины. Увеличивает ROP в стабильных условиях скважины.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'HPWBM для борьбы с проблемами сланцев с использованием различных типов гликоля и ингибиторных солей, совместимых с низкими и высокими температурами пласта.',
        table_1_data_2_application: 'Снижает скорость разбавления. Минимизирует прихваты долота. Увеличивает ROP. Снижает крутящий момент и сопротивление.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'HPWBM, разработанный с добавками асфальта для улучшения стабильности сланцев, предотвращения разрушения выбуренной твердой фазы и помощи в контроле высокотемпературной потери фильтрата в реактивных сланцах.',
        table_1_data_3_application: 'Помогает со стабильностью ствола скважины/контролем высокотемпературной потери фильтрата. Снижает скорость разбавления. Увеличивает ROP. Снижает крутящий момент и сопротивление.',
        table_2_title: 'Утяжеленный HPWBM для зон высокого давления',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'Насыщенный солью раствор на водной основе, использующий утяжелители BARA-WATE и HEMA WATE, соответствующие загустители, агенты для контроля потери фильтрата и стабилизаторы температуры для бурения зон высокого давления до 2.4 S.G.',
        table_2_data_1_application: 'Для бурения глубоких зон соленой воды с высоким давлением до 2.4 S.G. Высокая устойчивость к кальцию и магнию. Хорошие реологические свойства и стабильная прочность геля при высоких температурах.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'Насыщенный солью раствор на водной основе, использующий утяжелители BARA-WATE и HEMA-WATE со специальными агентами для контроля реологии, чтобы сохранить реологические свойства и потерю фильтрата стабильными при бурении зон высокого давления до 2.65 S.G.',
        table_2_data_2_application: 'Для бурения глубоких аномально высоких давлений в зонах соленой воды до 2.65 S.G. Высокая устойчивость к кальцию и магнию. Хорошие реологические свойства и стабильная прочность геля при высоких температурах.',
        table_3_title: 'Высоко-ROP HPWBM для наклонно-направленных, горизонтальных и скважин с большим отходом от вертикали',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'HPWBM, разработанный для бурения высоконаправленных и горизонтальных участков с использованием специальных высокопроизводительных смазок для снижения крутящего момента и сопротивления во время скольжения и улучшения ROP.',
        table_3_data_1_application: 'Для бурения горизонтальных и высоконаправленных скважин. Снижает крутящий момент и сопротивление/коэффициент трения. Улучшает ROP. Снижает дифференциальный прихват.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'Мы предлагаем широкий спектр инженерных решений для буровых растворов, чтобы удовлетворить инженерные и эксплуатационные требования буровых работ наших клиентов.',
        description_2: 'Наши опытные инженеры могут повысить ценность ваших проектов, предоставляя следующие услуги:',
        services_title: 'Инжиниринг буровых растворов',
        service_1: 'Программа проектирования растворов для заканчивания и капитального ремонта',
        service_2: 'Проектирование раствора',
        service_3: 'Проектирование гидравлики и очистки скважины',
        service_4: 'Изучение стабильности ствола скважины',
        service_5: 'Исследование проблем бурения',
        service_6: 'Итоговый отчет и сводка по скважине',
        advanced_title: 'Передовые технологии и приложения',
        advanced_1: 'Проект по комплексному управлению растворами',
        advanced_2: 'Проект по оперативному управлению',
        advanced_3: 'Сравнительный анализ и оценка производительности'
      },
      about_page: {
        certificates_title: "Сертификаты",
        best_in_the_world_title: "Лучшие в мире",
        best_in_the_world_text: "Мы являемся мировым лидером в области высококачественных услуг. С нашей профессиональной командой и инновационными решениями, мы предоставляем нашим клиентам лучшие результаты.",
        stats_cases_solved: "Решенные кейсы",
        stats_projects: "Проекты",
        stats_happy_clients: "Довольные клиенты",
        stats_yearly_profit: "Годовая прибыль"
      },
      slider: {
        title_1: "Специалист по буровым растворам",
        subtitle_1: "Идеальное качество в нефтегазовой отрасли",
        heading_1: "Безопасность и Эффективность",
        description_1: "Мы предоставляем высококачественные буровые растворы и растворы для заканчивания для нефтегазовой промышленности. Мы ставим безопасность и эффективность во главу угла в каждом проекте.",
        title_2: "Подход, ориентированный на решение",
        subtitle_2: "Решения, адаптированные к различным условиям бурения",
        heading_2: "Инновации и Инжиниринг",
        description_2: "Мы разрабатываем инновационные растворы, которые отвечают самым сложным условиям бурения. Мы предлагаем индивидуальные инженерные решения для удовлетворения потребностей наших клиентов.",
        title_3: "Глобальный охват, локальная экспертиза",
        subtitle_3: "К вашим услугам с передовыми технологиями",
        heading_3: "Устойчивое будущее",
        description_3: "Мы объединяем наш глобальный опыт с местными знаниями, чтобы предоставлять надежные и устойчивые услуги. Мы уделяем особое внимание защите окружающей среды."
      },
      products_page: {
        drilling_fluid_additives: {
          title: "Присадки к буровым растворам",
          description: "Присадки к буровым растворам – это специализированные химические вещества или материалы, добавляемые в буровые растворы для улучшения или изменения их свойств и производительности во время буровых операций. Эти присадки выполняют различные функции и могут улучшать такие аспекты, как вязкость раствора, смазывающая способность, контроль фильтрации, ингибирование сланца и термическая стабильность. Они помогают оптимизировать эффективность бурения, защищать ствол скважины и обеспечивать безопасное и эффективное бурение в различных геологических формациях и условиях.",
          table_headers: {
            trade_name: "Торговое название",
            unit_size: "Размер Единицы",
            description: "Описание"
          },
          products: {
            clay_bond_l: {
              trade_name: "CLAY BOND L",
              unit_size: "55 GAL/CAN",
              description: "Обеспечение стабилизации сланца и инкапсуляции выбуренной породы"
            },
            n_inhibit: {
              trade_name: "N-INHIBIT",
              unit_size: "55 GAL/DRUM",
              description: "Высокоингибирующий, высокосмазывающий наноингибитор сланца для замены KCl в высокореактивных сланцах/глинах"
            },
            well_stab: {
              trade_name: "WELL-STAB",
              unit_size: "55 GAL/DRUM",
              description: "Смесь химикатов для улучшения стабильности ствола скважины"
            },
            shale_drill: {
              trade_name: "SHALE-DRILL",
              unit_size: "55 GAL/DRUM",
              description: "Стабилизатор ствола скважины, агент для смазки и контроля высокой фильтрации"
            },
            emo_block: {
              trade_name: "EMO-BLOCK",
              unit_size: "55 GAL/DRUM",
              description: "Полупроницаемый мембранный ингибитор сланца"
            },
            h2s_scav_l: {
              trade_name: "H2S SCAV L",
              unit_size: "55 GAL/DRUM",
              description: "Жидкий поглотитель сероводорода, используемый в буровых растворах на водной основе"
            },
            glyco_drill_gp: {
              trade_name: "GLYCO-DRILL GP",
              unit_size: "55 GAL/DRUM",
              description: "Обеспечивает хорошую производительность по контролю сланца, повышая твердость выбуренной породы"
            },
            well_sweep: {
              trade_name: "WELL-SWEEP",
              unit_size: "12.5 KG/SX",
              description: "Высоковязкий состав/очищающий флюид для обеспечения высокоэффективной очистки ствола и выноса выбуренной породы"
            },
            hixo_drill: {
              trade_name: "HIXO-Drill",
              unit_size: "25 KG/SX",
              description: "Тиксотропные агенты для полимеров/глинистых растворов"
            },
            rheo_stab: {
              trade_name: "RHEO-STAB",
              unit_size: "55 GAL/DRUM",
              description: "Агент для стабилизации реологических свойств"
            },
            rop_enhancer_hc: {
              trade_name: "ROP Enhancer (HC)",
              unit_size: "55 GAL/DRUM",
              description: "Смесь органических поверхностно-активных веществ для повышения скорости проходки в пластах с высоким содержанием глины"
            },
            eco_lube_hp: {
              trade_name: "ECO Lube HP",
              unit_size: "55 GAL/DRUM",
              description: "Обеспечивает экстремальные смазочные свойства буровым растворам"
            },
            pipe_free_mp: {
              trade_name: "PIPE-Free MP",
              unit_size: "55 GAL/DRUM",
              description: "Присадка против прихвата под давлением"
            },
            bit_wash: {
              trade_name: "BIT-WASH",
              unit_size: "55 GAL/DRUM",
              description: "Высокоэффективный агент для удаления налипания долота"
            }
          }
        },
        completion_and_workover_fluids_additives: {
          title: "Присадки к растворам для заканчивания и капитального ремонта",
          description: "Присадки к растворам для заканчивания и капитального ремонта – это специализированные химические вещества или субстанции, добавляемые в растворы для заканчивания и капитального ремонта для улучшения их производительности и свойств. Эти присадки играют ключевую роль в оптимизации эффективности, безопасности и действенности операций по заканчиванию и капитальному ремонту в нефтегазовых скважинах.",
          table_headers: {
            trade_name: "Торговое название",
            unit_size: "Размер Единицы",
            description: "Описание"
          },
          products: {
            anti_crystaline: {
              trade_name: "ANTI-CRYSTALINE",
              unit_size: "25 KG/SX",
              description: "Ингибиторы кристаллизации для рассола"
            },
            calcium_bromide_l: {
              trade_name: "CALCIUM BROMIDE L",
              unit_size: "55 GAL/DRUM",
              description: "Односолевой прозрачный рассол плотностью 14.2 lbs/gal"
            },
            calcium_bromide_p: {
              trade_name: "CALCIUM BROMIDE P",
              unit_size: "25 KG/SX",
              description: "Кальциевая соль бромоводородной кислоты. Концентрированный гигроскопический порошок, который поглощает воду из воздуха"
            },
            forma_drill_ii_l: {
              trade_name: "FORMA-DRILL II-L",
              unit_size: "1000 Lit/IBC",
              description: "Форматный рассол – на основе калия – 1.57 S.G"
            },
            sodium_bromide_l: {
              trade_name: "SODIUM BROMIDE L",
              unit_size: "55 GAL/DRUM",
              description: "Односолевой прозрачный рассол (жидкий, плотность 1.3 S.G)"
            },
            zinc_bromide: {
              trade_name: "ZINC BROMIDE",
              unit_size: "55 GAL/DRUM",
              description: "Прозрачный рассол без твердых частиц с минимальной плотностью 1.92 SG"
            },
            well_clean: {
              trade_name: "WELL-CLEAN",
              unit_size: "55 GAL/DRUM",
              description: "Агент для очистки скважины"
            },
            bio_mcb: {
              trade_name: "BIO MCB",
              unit_size: "55 GAL/DRUM",
              description: "Разрушитель фильтрационной корки"
            },
            brine_cor_hp: {
              trade_name: "BRINE-COR HP",
              unit_size: "55 GAL/DRUM",
              description: "Высокоактивный, водорастворимый ингибитор коррозии"
            },
            ox_scav_l: {
              trade_name: "OX-SCAV L",
              unit_size: "55 GAL/DRUM",
              description: "Жидкий поглотитель кислорода"
            },
            pipe_cor: {
              trade_name: "PIPE-COR",
              unit_size: "55 GAL/DRUM",
              description: "Ингибитор коррозии – тип спрея"
            },
            clean_surf: {
              trade_name: "CLEAN SURF",
              unit_size: "55 GAL/DRUM",
              description: "Смесь эмульгаторов для улучшения смачивания барита и других твердых частиц бурового раствора"
            },
            defoam_alc: {
              trade_name: "DEFOAM ALC",
              unit_size: "55 GAL/DRUM",
              description: "Жидкий пеногаситель на основе спирта для снижения поверхностного натяжения в буровых растворах на водной основе"
            },
            defoam_slc: {
              trade_name: "DEFOAM SLC",
              unit_size: "55 GAL/DRUM",
              description: "Жидкий пеногаситель на основе силикона"
            }
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'az',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;