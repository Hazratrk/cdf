import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  az: {
    translation: {
      about_us: { 
        title: "Biz Kimik?",
        about_company: "Caspian Drilling Fluids (CDF) qazma və tamamlama məhlullarının satışı, dizaynı, mühəndislik xidmətləri və məhsullarına fokuslanmış neft və qaz mühəndisliyi şirkətidir.",
        description_1: "Qazma və tamamlama məhlulları neft və qaz hasilatının maksimum səviyyədə təmin edilməsində çox mühüm rol oynayır və biz, CDF olaraq, optimal neft-qaz hasilatını təmin etmək üçün kəşfiyyat mərhələsindən hasilata qədər zəruri məhsul və xidmətləri təqdim edirik.",
        description_2: "Şirkətimiz Türkiyənin daxili bazarlarına üzvi kimyəvi maddələrin aparıcı idxalçısıdır. İstanbul və Adana bölgələrində saxlama anbarlarımız var. Geniş çeşiddə məhsullar təklif edərək, Türkiyənin monomer və polimer bazarının təxminən 7%-ni təmin edirik. Eyni zamanda, Adana bölgəsindəki anbarlarımıza kimyəvi tullantılar da idxal edirik."
      }
      ,
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
          projects: {
            label: 'Layihələr'
          },
          partners: {
            label: 'Tərəfdaşlar'
          },
          years: {
            label: 'İl'
          },
          countries: {
            label: 'Ölkələr'
          }
        }
      },
      hseSection: {
        category: 'Sağlamlıq, Təhlükəsizlik və Ətraf Mühit',
        environmentalMonitoring: {
          title: 'Ətraf Mühitin Monitorinqi'
        },
        employeesSecurity: {
          title: 'İşçilərin Təhlükəsizliyi'
        },
        readMore: 'Daha Çox Oxu'
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
        simulation_software_list_3: 'Hidravlik və Quyu Təmizləmə Dizaynı',
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
        description: 'Su əsaslı qazma məhlulları suyun davamlı faza kimi istifadə edilməsi ilə hazırlanır. Bu məhlullar ekoloji cəhətdən təmiz, sərfəli və çoxfunksiyalı olub, geniş spektrli qazma tətbiqləri üçün uyğundur. Onlar quyu divarının yaxşı sabitliyini, əla fluid itkisi nəzarətini təmin edir və spesifik qazma şərtlərinə asanlıqla tənzimlənə bilir.',
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
      },about_page: {
        certificates_title: "Sertifikatlar",
        best_in_the_world_title: "Dünyada Ən Yaxşı",
        best_in_the_world_text: "Yüksək keyfiyyətli xidmətlərimizlə dünya səviyyəsində liderik. Bizim peşəkar komandamız və innovativ həllərimizlə müştərilərimizə ən yaxşı nəticələri təqdim edirik.",
        stats_cases_solved: "Həll Olunmuş İşlər",
        stats_projects: "Layihələr",
        stats_happy_clients: "Məmnun Müştərilər",
        stats_yearly_profit: "İllik Gəlir"
      }
    }
  },
ru: {
    translation: {
    about_us: {
        title: "Кто мы?",
        about_company: "Caspian Drilling Fluids (CDF) – это нефтегазовая инжиниринговая компания, специализирующаяся на продаже, проектировании, инженерных услугах и продукции для буровых растворов и растворов для заканчивания скважин.",
        description_1: "Буровые растворы и растворы для заканчивания играют очень важную роль в обеспечении максимальной добычи углеводородов, и мы, как CDF, предоставляем необходимые продукты и услуги от этапа разведки до добычи, чтобы обеспечить оптимальную добычу нефти и газа.",
        description_2: "Наша компания является ведущим импортером органических химикатов на внутренний рынок Турции. У нас есть складские помещения в регионах Стамбула и Аданы. Поставляя широкий спектр продукции, мы обеспечиваем около 7% турецкого рынка мономеров и полимеров. В то же время мы также импортируем химические отходы на наши объекты в регионе Аданы."
      },
      activitiesSection: {
        subtitle: 'ДЕЯТЕЛЬНОСТЬ',
        title: 'Наша деятельность',
        nonaqueousDrillingFluids: {
          title: 'Неводные буровые растворы (OBM)',
          description: 'По запросу клиента на высочайшую степень ингибирования, смазывающей способности, термической и химической стабильности, мы предлагаем ряд систем неводных буровых растворов, разработанных для сложных условий. Наш портфель включает буровые растворы на нефтяной, дизельной и синтетической основе, специально разработанные для технически сложных условий, включая операции на суше и на морском шельфе.'
        },
        waterBaseDrillingFluids: {
          title: 'Буровые растворы на водной основе',
          description: 'Эти растворы являются экологически чистыми, экономически выгодными и универсальными.'
        },
        completionAndWorkoverFluids: {
          title: 'Услуги по растворам для заканчивания и капитального ремонта скважин',
          description: 'Проектирование растворов для заканчивания и капитального ремонта скважин оказывает прямое влияние на целостность и срок службы скважины.'
        },
        drillingFluidsSimulation: {
          title: 'Программное обеспечение для моделирования буровых растворов',
          description: 'Наши опытные инженеры могут повысить ценность ваших проектов, предоставляя следующие услуги.'
        }
      },
      missionSection: {
        missionTitle: 'НАША МИССИЯ',
        missionText: 'стать ведущей компанией по предоставлению услуг по растворам на региональном рынке, предлагая самые качественные и современные продукты и подходы местным нефтегазовым компаниям.',
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
        readMore: 'Читать далее',
        stats: {
          projects: {
            label: 'Проекты'
          },
          partners: {
            label: 'Партнёры'
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
        category: 'Здоровье, Безопасность и Окружающая среда',
        environmentalMonitoring: {
          title: 'Экологический мониторинг'
        },
        employeesSecurity: {
          title: 'Безопасность сотрудников'
        },
        readMore: 'Читать далее'
      },
      productsSection: {
        category: 'ПРОДУКЦИЯ',
        title: 'Наша продукция',
        completionAndWorkoverAdditives: {
          title: 'Добавки для растворов заканчивания и капитального ремонта'
        },
        drillingFluidAdditives: {
          title: 'Добавки для буровых растворов'
        },
        readMore: 'Читать далее'
      },
      header: {
        home: 'Главная',
        activities: 'Деятельность',
        products: 'Продукция',
        hse: 'Здоровье, Безопасность и Окружающая среда',
        about_us: 'О нас'
      },
      activities: {
         nonaqueous_drilling_fluids_obm: "Неводные буровые растворы (OBM)",
        water_base_drilling_fluids: "Буровые растворы на водной основе",
        completion_workover_fluids_services: "Услуги по растворам для заканчивания и капитального ремонта скважин",
        drilling_fluids_simulation_software: "Программное обеспечение для моделирования буровых растворов",
        submersible_electric_centrifugal_pumps_and_submersible_electric_motors_for_esp_drive_evn: "Погружные электроцентробежные насосы и погружные электродвигатели для привода ЭЦН (ЭВН)",
        central_laboratory: "Центральная лаборатория",
        warehouse: "Склад",
        logistic_services: "Логистические услуги",
        engineering_services: "Инженерные услуги",
        project_management_services: "Услуги по управлению проектами",
        submersible_pumps_title: 'Погружные электроцентробежные насосы и погружные электродвигатели (ЭЦН)',
        submersible_pumps_text: 'По запросу клиента, CDF может поставлять погружные электроцентробежные насосы и погружные электродвигатели для привода ЭЦН (ЭВН), производства ООО «ЛУКОЙЛ ЭПУ Сервис».',
        nonaqueous_drilling_fluids_obm_title: 'Неводные буровые растворы (OBM)',
        nonaqueous_drilling_fluids_obm_text_1: 'По запросу клиента на высочайшую степень ингибирования, смазывающей способности, термической и химической стабильности, мы предлагаем ряд систем неводных буровых растворов, разработанных для сложных условий.',
        nonaqueous_drilling_fluids_obm_text_2: 'Наш портфель включает буровые растворы на нефтяной, дизельной и синтетической основе, специально разработанные для технически сложных условий, включая операции на суше и на морском шельфе.',
        get_in_touch: 'Связаться с нами',
        name: 'Имя, фамилия',
        email: 'Электронная почта',
        message: 'Сообщение',
        contact_info: 'Контактная информация',
        water_base_drilling_fluids_title: 'Буровые растворы на водной основе',
        completion_workover_fluids_title: 'Услуги по растворам для заканчивания и капитального ремонта скважин',
        completion_workover_fluids_text_1: 'Проектирование растворов для заканчивания и капитального ремонта скважин оказывает прямое влияние на целостность и срок службы скважины.',
        completion_workover_fluids_text_2: 'Качественный раствор минимизирует операции капитального ремонта, снижает скорость коррозии и предотвращает повреждение внутрискважинных инструментов. Кроме того, мы оцениваем совместимость растворов для заканчивания и капитального ремонта скважин со свойствами пластовой воды, чтобы минимизировать повреждение пласта.',
        simulation_software_title: 'Программное обеспечение для моделирования буровых растворов',
        simulation_software_text_1: 'Мы предлагаем широкий спектр инженерных решений для буровых растворов, чтобы удовлетворить инженерные и эксплуатационные требования наших клиентов в их буровой деятельности.',
        simulation_software_text_2: 'Наши опытные инженеры могут повысить ценность ваших проектов, предоставляя следующие услуги:',
        simulation_software_list_1: 'Инжиниринг буровых растворов',
        simulation_software_list_2: 'Программа для проектирования растворов заканчивания и капитального ремонта',
        simulation_software_list_3: 'Гидравлический расчет и очистка скважины',
        simulation_software_list_4: 'Изучение устойчивости стенок скважины',
        simulation_software_list_5: 'Исследование проблем бурения',
        simulation_software_list_6: 'Окончательный отчет по скважине и резюме',
        simulation_software_list_7: 'Передовые технологии и приложения',
        simulation_software_list_8: 'Проект комплексного управления растворами',
        simulation_software_list_9: 'Сравнительный анализ и оценка производительности',
        central_laboratory_title: 'Центральная лаборатория',
        central_laboratory_text_1: 'Новая Центральная лаборатория CDF расположена в городе Баку, в Гарадагском районе. Лаборатория оснащена оборудованием, произведенным в основном компаниями OFITE и FANN, которое соответствует стандартам API (Американского института нефти).',
        central_laboratory_text_2: 'Всё оборудование, используемое в лаборатории, ежегодно калибруется в Азербайджанском государственном институте метрологии.',
        central_laboratory_main_functions: 'Основные функции',
        central_laboratory_list_1: 'Анализ и контроль качества буровых растворов на водной основе.',
        central_laboratory_list_2: 'Анализ и контроль качества буровых растворов на масляной основе.',
        central_laboratory_list_3: 'Анализ и контроль качества растворов для заканчивания и капитального ремонта.',
        central_laboratory_list_4: 'Настройка лабораторного оборудования.',
        central_laboratory_list_5: 'Анализ пластовых вод.',
        central_laboratory_list_6: 'Входной контроль (контроль качества поступающей продукции).',
        central_laboratory_list_7: 'Тестирование новых продуктов.',
        warehouse_title: 'Склад',
        warehouse_text: 'У CDF имеется склад площадью 2400 квадратных метров для безопасного хранения химических веществ и других сервисных товаров. Персонал склада, как и все остальные сотрудники, обучен в области HSE.',
        logistic_services_title: 'Логистические услуги',
        logistic_services_text_1: 'CDF является глобальным поставщиком логистических решений. CDF гордится вниманием к деталям, творческим и инновационным решением проблем, а также отзывчивостью к нашим клиентам. CDF предлагает опыт в области международных логистических услуг, включая:',
        logistic_services_list_1: 'Управление транспортом',
        logistic_services_list_2: 'Управление логистикой',
        logistic_services_list_3: 'Международные перевозки',
        logistic_services_list_4: 'Внутренние перевозки',
        logistic_services_list_5: 'Таможенное оформление',
        engineering_services_title: 'Инженерные услуги',
        engineering_services_text_1: 'Инженерная команда CDF помогает нашим клиентам с планированием, проектированием и строительством их проектов. CDF использует самые современные технологии для разработки и отслеживания инженерных пакетов. Наши инженерные услуги включают помощь в следующем:',
        engineering_services_list_1: 'Исследования Pre-FEED',
        engineering_services_list_2: 'Исследования FEED',
        engineering_services_list_3: 'Оптимизация (устранение «бутылочных горлышек»)',
        engineering_services_list_4: 'Исследования оптимизации',
        engineering_services_list_5: 'Проектирование завода',
        engineering_services_list_6: 'Модернизация',
        engineering_services_list_7: 'Ретрофит (модернизация существующего оборудования)',
        project_management_title: 'Услуги по управлению проектами',
        project_management_text_1: 'CDF помогает нашим клиентам с планированием и надзором за проектами, чтобы гарантировать их своевременное завершение и соблюдение бюджета. Наши менеджеры проектов обладают широким международным опытом в организации и управлении проектами.',
        project_management_text_2: 'CDF планирует и распределяет проектные ресурсы, готовит бюджеты, отслеживает прогресс и информирует заинтересованные стороны на протяжении всего проекта. Наши услуги по управлению проектами предоставляют клиентам информацию и поддержку, необходимые для успешного завершения их проектов.',
        project_management_list_1: 'Планирование проекта',
        project_management_list_2: 'Выполнение проекта',
        project_management_list_3: 'Управление рисками',
        project_management_list_4: 'Контроль бюджета',
        project_management_list_5: 'Управление временем',
        project_management_list_6: 'Управление ресурсами',
        project_management_list_7: 'Управление взаимодействием с заинтересованными сторонами'
      },
      products: {
        drilling_additives: 'Добавки для буровых растворов',
        completion_additives: 'Добавки для растворов заканчивания и капитального ремонта'
      },
      hse: {
        environmental: 'Экологический мониторинг',
        employees_security: 'Безопасность сотрудников'
      },
      activities_page: {
        title: 'Наша деятельность',
        subtitle: 'Узнайте больше о наших услугах',
        search_placeholder: 'Поиск по деятельности',
        no_results: 'Результаты не найдены'
      },
      water_base_page: {
        description: 'Буровые растворы на водной основе изготавливаются с использованием воды в качестве непрерывной фазы. Эти растворы являются экологически чистыми, экономически выгодными и универсальными, подходят для широкого спектра буровых операций. Они обеспечивают хорошую стабильность ствола скважины, отличный контроль фильтрации и легко адаптируются к конкретным условиям бурения.',
        table_headers_trade_name: 'Торговое название',
        table_headers_fluid_type: 'Тип жидкости',
        table_headers_systems_description: 'Описание системы',
        table_headers_application: 'Область применения',
        table_1_title: 'Ингибированный HPWBM для умеренных – активных глин / сланцев',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'HPWBM, состоящий из высокомолекулярных полимеров для предотвращения дисперсии глины и изменения реологических свойств бурового раствора.',
        table_1_data_1_application: 'Бурение высокореактивной глины/сланца/повышение скорости. Повышает стабильность ствола скважины. Повышает ROP в стабильных условиях скважины.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'HPWBM для решения проблем сланцев с использованием различных типов гликоля и ингибирующих солей, совместимых с низкими и высокими пластовыми температурами.',
        table_1_data_2_application: 'Снижает скорость разбавления. Минимизирует прилипание буровой стружки. Повышает ROP. Снижает крутящий момент и сопротивление.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'HPWBM, разработанный с добавками асфальта для улучшения стабильности сланца, предотвращения дисперсии выбуренных твёрдых частиц и контроля фильтрации при высоких температурах в реактивных сланцах.',
        table_1_data_3_application: 'Помогает улучшить стабильность ствола скважины/уменьшить фильтрацию при высоких температурах. Снижает скорость разбавления. Повышает ROP. Снижает крутящий момент и сопротивление.',
        table_2_title: 'Утяжелённый HPWBM для зон высокого давления',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'Водный раствор, насыщенный солью, для бурения глубоких зон высокого давления до 2,4 S.G с использованием утяжелителей BARA-WATE и HEMA WATE, подходящих загустителей, агентов для контроля фильтрации и стабилизаторов температуры.',
        table_2_data_1_application: 'Для бурения глубоких зон высокого давления соленой воды до 2,4 S.G. Высокая устойчивость к кальцию и магнию. Хорошие реологические свойства и стабильная прочность геля при высоких температурах.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'Водный раствор, насыщенный солью, для поддержания стабильных реологических свойств и контроля фильтрации при бурении зон высокого давления до 2,65 S.G с использованием утяжелителей BARA-WATE и HEMA-WATE и специальных агентов для контроля реологии.',
        table_2_data_2_application: 'Для бурения глубоких аномально высоких давлений соленой воды до 2,65 S.G. Высокая устойчивость к кальцию и магнию. Хорошие реологические свойства и стабильная прочность геля при высоких температурах.',
        table_3_title: 'Высокоскоростной HPWBM для наклонно-направленных, горизонтальных и расширенных охватов скважин',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'HPWBM, разработанный для бурения наклонно-направленных и горизонтальных участков с использованием специальных высокоэффективных смазок для снижения крутящего момента и сопротивления при протаскивании и повышения ROP.',
        table_3_data_1_application: 'Для бурения горизонтальных и высоконаклонных скважин. Снижает крутящий момент и сопротивление/коэффициент трения. Повышает ROP. Снижает дифференциальное прилипание.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'Мы предлагаем широкий спектр инженерных решений для буровых растворов, чтобы удовлетворить инженерные и эксплуатационные требования наших клиентов в их буровой деятельности.',
        description_2: 'Наши опытные инженеры могут повысить ценность ваших проектов, предоставляя следующие услуги:',
        services_title: 'Инжиниринг буровых растворов',
        service_1: 'Программа для проектирования растворов заканчивания и капитального ремонта',
        service_2: 'Проектирование раствора',
        service_3: 'Гидравлический расчет и очистка скважины',
        service_4: 'Изучение устойчивости стенок скважины',
        service_5: 'Исследование проблем бурения',
        service_6: 'Окончательный отчет по скважине и резюме',
        advanced_title: 'Передовые технологии и приложения',
        advanced_1: 'Проект комплексного управления растворами',
        advanced_2: 'Проект по управлению операциями',
        advanced_3: 'Сравнительный анализ и оценка производительности'
      },about_page: {
        certificates_title: "Сертификаты",
        best_in_the_world_title: "Лучшие в Мире",
        best_in_the_world_text: "Мы являемся мировым лидером благодаря нашим высококачественным услугам. Наша профессиональная команда и инновационные решения обеспечивают наилучшие результаты для наших клиентов.",
        stats_cases_solved: "Решенные Задачи",
        stats_projects: "Проекты",
        stats_happy_clients: "Довольные Клиенты",
        stats_yearly_profit: "Годовая Прибыль"
      }
    }
  },
en: {
    translation: {
      about_us: {
        title: "WHO WE ARE?",
        about_company: "Caspian Drilling Fluids (CDF) is an oil and gas engineering company focused on sales, designing drilling and completion fluids, engineering services and products.",
        description_1: "Drilling and completion fluids play a very important role in ensuring maximum hydrocarbon production, and we, as the CDF, supply the products and services necessary from the exploration phase to production to ensure optimum oil and gas production.",
        description_2: "Our company is a leading importer of organic chemicals into the Turkish domestic markets. We have storage facilities in the Istanbul and Adana regions. Supplying a broad range of products, we supply about 7% of the Turkish monomer and polymer market. At the same time, we also import chemical waste to our facilities in the Adana region."
      },
   
      activitiesSection: {
        subtitle: 'ACTIVITIES',
        title: 'Our Activities',
        nonaqueousDrillingFluids: {
          title: 'Nonaqueous Drilling Fluids (OBM)',
          description: 'To meet client demands for the highest level of inhibition, lubricity, thermal, and chemical stability, we offer a range of Nonaqueous Drilling Fluids systems designed for challenging conditions. Our portfolio includes oil, diesel, and synthetic-based drilling fluids specifically engineered for technically demanding applications, including land and offshore operations.'
        },
        waterBaseDrillingFluids: {
          title: 'Water Base Drilling Fluids',
          description: 'These fluids are environmentally friendly, cost-effective, and versatile.'
        },
        completionAndWorkoverFluids: {
          title: 'Completion and Workover Fluids Services',
          description: 'The design of completion and workover fluids has a direct impact on wellbore integrity and longevity.'
        },
        drillingFluidsSimulation: {
          title: 'Drilling Fluids Simulation Software',
          description: 'Our experienced engineers can add value to your projects by providing the following services.'
        }
      },
      missionSection: {
        missionTitle: 'OUR MISSION',
        missionText: 'is to become a leading fluids service provider in the region’s market by providing the highest quality and modern products and approaches to local oil and gas companies.',
        highlightedText: 'CDF’s goal',
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
        nonaqueous_drilling_fluids_obm_text_1: 'To meet client demands for the highest level of inhibition, lubricity, thermal, and chemical stability, we offer a range of Nonaqueous Drilling Fluids systems designed for challenging conditions.',
        nonaqueous_drilling_fluids_obm_text_2: 'Our portfolio includes oil, diesel, and synthetic-based drilling fluids specifically engineered for technically demanding applications, including land and offshore operations.',
        central_laboratory_title: 'Central Laboratory',
        central_laboratory_text_1: 'The new CDF Central Laboratory is located in Baku, Garadagh region. The laboratory is equipped with equipment manufactured mainly by OFITE and FANN, which meets API (American Petroleum Institute) standards.',
        central_laboratory_text_2: 'All equipment used in the laboratory is calibrated annually at the Azerbaijan State Institute of Metrology.',
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
        completion_workover_fluids_text_1: 'The design of completion and workover fluids has a direct impact on wellbore integrity and longevity.',
        completion_workover_fluids_text_2: 'A good fluid will minimize workover operations, reduce corrosion rates, and prevent damage to downhole tools. In addition, we evaluate the compatibility of completion and workover fluids with formation water properties to minimize formation damage.',
        simulation_software_title: 'Drilling Fluids Simulation Software',
        simulation_software_text_1: 'We offer a wide range of drilling fluid engineering solutions to meet our clients’ engineering and operational requirements in their drilling activities.',
        simulation_software_text_2: 'Our experienced engineers can add value to your projects by providing the following services:',
        simulation_software_list_1: 'Drilling Fluids Engineering',
        simulation_software_list_2: 'Completion and Workover Fluids Design Program',
        simulation_software_list_3: 'Hydraulics and Hole Cleaning Design',
        simulation_software_list_4: 'Wellbore Stability Study',
        simulation_software_list_5: 'Investigation of Drilling Problems',
        simulation_software_list_6: 'Final well report and review',
        simulation_software_list_7: 'Advanced Technologies and Applications',
        simulation_software_list_8: 'Total Fluids Management Project',
        simulation_software_list_9: 'Benchmarking and Performance Evaluation',
        warehouse_title: 'Warehouse',
        warehouse_text: 'CDF has a 2,400 square meter warehouse for the safe storage of chemicals and other service goods. Warehouse personnel, like all other employees, are trained in HSE.',
        logistic_services_title: 'Logistic Services',
        logistic_services_text_1: 'CDF is a global provider of logistics solutions. CDF prides itself with attention to detail, creative and innovative problem solving, and responsiveness to our clients. CDF offers expertise in international logistic services including:',
        logistic_services_list_1: 'Transportation Management',
        logistic_services_list_2: 'Logistics Management',
        logistic_services_list_3: 'International Shipping',
        logistic_services_list_4: 'Domestic Shipping',
        logistic_services_list_5: 'Customs Clearance',
        engineering_services_title: 'Engineering Services',
        engineering_services_text_1: 'The CDF engineering team helps our clients with planning, designing, and building their projects. CDF uses state of the art technology to develop and track engineering packages. Our engineering services include assisting with:',
        engineering_services_list_1: 'Pre-FEED studies',
        engineering_services_list_2: 'FEED studies',
        engineering_services_list_3: 'Debottlenecking',
        engineering_services_list_4: 'Optimization studies',
        engineering_services_list_5: 'Plant design',
        engineering_services_list_6: 'Upgrades',
        engineering_services_list_7: 'Retrofits',
        project_management_title: 'Project Management Services',
        project_management_text_1: 'CDF assists our clients with planning and overseeing projects to ensure the projects are completed in a timely fashion and within budget. Our Project Managers have a wide range of international experience organizing and managing projects.',
        project_management_text_2: 'CDF plans and designates project resources, prepares budgets, monitors progress, and keeps stakeholders informed throughout the entire length of the project. Our Project Management Services give our clients the information and support they need to ensure their projects are successful.',
        project_management_list_1: 'Project planning',
        project_management_list_2: 'Project execution',
        project_management_list_3: 'Risk management',
        project_management_list_4: 'Budget control',
        project_management_list_5: 'Time management',
        project_management_list_6: 'Resource management',
        project_management_list_7: 'Stakeholder management'
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
        subtitle: 'Find out more about our services',
        search_placeholder: 'Search for an activity',
        no_results: 'No results found'
      },
      water_base_page: {
        description: 'Water-based drilling fluids are formulated using water as the continuous phase. These fluids are environmentally friendly, cost-effective, and versatile, suitable for a wide range of drilling applications. They provide good wellbore stability, excellent fluid loss control, and can be easily adjusted to specific drilling conditions.',
        table_headers_trade_name: 'Trade Name',
        table_headers_fluid_type: 'Fluid Type',
        table_headers_systems_description: 'System Description',
        table_headers_application: 'Application',
        table_1_title: 'Inhibited HPWBM for Mild to Active Shale/Clay',
        table_1_data_1_trade_name: 'CLAY-BOND',
        table_1_data_1_description: 'HPWBM composed of high molecular weight polymers to prevent clay dispersion and change in rheological properties of drilling fluid.',
        table_1_data_1_application: 'Drilling highly reactive clay/shale/increasing rate. Increases wellbore stability. Increases ROP in stable well conditions.',
        table_1_data_2_trade_name: 'GLYCO-DRILL',
        table_1_data_2_description: 'HPWBM to overcome shale problems using different types of glycol and inhibiting salts compatible with low and high formation temperatures.',
        table_1_data_2_application: 'Reduces dilution rate. Minimizes stuck cuttings. Increases ROP. Reduces torque and drag.',
        table_1_data_3_trade_name: 'SHALE-DRILL',
        table_1_data_3_description: 'HPWBM formulated with asphalt additives to improve shale stability, prevent drilled solids dispersion, and help control high-temperature fluid loss in reactive shales.',
        table_1_data_3_application: 'Helps improve wellbore stability/reduce high-temperature fluid loss. Reduces dilution rate. Increases ROP. Reduces torque and drag.',
        table_2_title: 'Weighted HPWBM for High-Pressure Zones',
        table_2_data_1_trade_name: 'HEAVY-DRILL',
        table_2_data_1_description: 'Salt-saturated water-based fluid for drilling deep high-pressure zones up to 2.4 S.G using BARA-WATE and HEMA WATE weighting agents, suitable viscosifiers, fluid loss control agents, and temperature stabilizers.',
        table_2_data_1_application: 'For drilling deep high-pressure salt water zones up to 2.4 S.G. High resistance to calcium and magnesium. Good rheological properties and stable gel strength at high temperatures.',
        table_2_data_2_trade_name: 'ULTRA-WEIGHT',
        table_2_data_2_description: 'Salt-saturated water-based fluid to maintain stable rheological properties and fluid loss while drilling high-pressure zones up to 2.65 S.G using BARA-WATE and HEMA-WATE weighting agents and special rheology control agents.',
        table_2_data_2_application: 'For drilling deep abnormally high-pressure salt water zones up to 2.65 S.G. High resistance to calcium and magnesium. Good rheological properties and stable gel strength at high temperatures.',
        table_3_title: 'High ROP HPWBM for Directional, Horizontal and Extended Reach Wells',
        table_3_data_1_trade_name: 'LUB-DRILL',
        table_3_data_1_description: 'HPWBM formulated to drill high directional and horizontal sections using special high-performance lubricants to reduce torque and drag during sliding and improve ROP.',
        table_3_data_1_application: 'For drilling horizontal and high-angle wells. Reduces torque and drag/friction factor. Improves ROP. Reduces differential sticking.'
      },
      drilling_fluids_simulation_page: {
        description_1: 'We offer a wide range of drilling fluid engineering solutions to meet our clients’ engineering and operational requirements in their drilling activities.',
        description_2: 'Our experienced engineers can add value to your projects by providing the following services:',
        services_title: 'Drilling Fluids Engineering',
        service_1: 'Completion and workover fluids program design',
        service_2: 'Fluid Design',
        service_3: 'Hydraulics and hole cleaning design',
        service_4: 'Wellbore stability study',
        service_5: 'Investigation of drilling problems',
        service_6: 'Final well report and review',
        advanced_title: 'Advanced Technologies and Applications',
        advanced_1: 'Total fluids management project',
        advanced_2: 'Operations management project',
        advanced_3: 'Benchmarking and performance evaluation'
      },about_page: {
        certificates_title: "Certificates",
        best_in_the_world_title: "Best in the World",
        best_in_the_world_text: "We are a world leader with our high-quality services. With our professional team and innovative solutions, we provide the best results for our clients.",
        stats_cases_solved: "Cases Solved",
        stats_projects: "Projects",
        stats_happy_clients: "Happy Clients",
        stats_yearly_profit: "Yearly Profit"
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