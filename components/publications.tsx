import PublicationItem from "./publication-item";
import { IPublicationItem } from "@/helpers/interfaces";

const publicationItems: IPublicationItem[] = [
  {
    title: "The Building as a Lab: Towards the development of a toolbox",
    publicationType: "Conference Proceedings",
    publicationDate: new Date(2020, 2, 25),
    publisher: "ARCOM Doctoral Workshop",
    doi: "https://itc.scix.net/pdfs/ADW-2020-paper-06.pdf",
    abstract:
      "The construction sector is undergoing significant changes amidst challenging economic conditions, changes in the pace of technology and increasing global narratives around social, personal and environmental health. These narratives are changing the way the construction sector operates, putting an emphasis on projects that can evidence a measurable impact on these performance indicators. Green Building standards (e.g. WELL and LEED) are addressing these challenges by making occupant health and wellbeing a focus of accreditation within building design. This is ushering in a new understanding of value that counterpoints the concept of value engineering”; which can become more of an exercise of cost-cutting than value improvement. The last decade has seen the rise of the living lab research paradigm, placing individuals at the centre of research and development. Living labs are physical environments that act as a laboratory, gathering data and learning from users. By linking building information and Internet-of-Things (IoT) data with occupant feedback, the construction sector can develop buildings as living labs and take an occupant-centric approach to how they innovate the entire building lifecycle. This paper explores a conceptual approach to how principles, workflows and technologies could be incorporated into a toolbox that would underpin living lab research in buildings. The principles presented, above all else, highlight the need and value of multi-disciplinary research in this domain. Research siloes have resulted in ambiguity in terminology and research methods, which is forcing current research to sit at the precipice of what is possible. By unifying multidisciplinary approaches, i.e. technologies, workflows and disciplines, to create a suite of tools, it is felt that researchers could provide a deeper understanding of the relationship between building and occupant that is currently seen across the literature base. This would add value to researchers and practitioners and aim to address an industry need for transparency, verbosity, and accountability of building information.",
    keywords: ["Internet of Things (IoT)", "Living Labs", "Blockchain", "Indoor Environmental Quality (IEQ)", "BuildingsSensors"],
    authorType: "First Author",
  },
  {
    title: "A Scoping Review of Technological Approaches to Environmental Monitoring",
    publicationType: "Journal Article",
    publicationDate: new Date(2020, 5, 4),
    publisher: "International Journal of Environmental Research and Public Health",
    doi: "https://doi.org/10.3390/ijerph17113995",
    abstract:
      "Indoor environment quality (IEQ) can negatively affect occupant health and wellbeing. Air quality, as well as thermal, visual and auditory conditions, can determine how comfortable occupants feel within buildings. Some can be measured objectively, but many are assessed by interpreting qualitative responses. Continuous monitoring by passive sensors may be useful to identify links between environmental and physiological changes. Few studies localise measurements to an occupant level perhaps due to many environmental monitoring solutions being large and expensive. Traditional models for occupant comfort analysis often exacerbate this by not differentiating between individual building occupants. This scoping review aims to understand IEQ and explore approaches as to how it is measured with various sensing technologies, identifying trends for monitoring occupant health and wellbeing. Twenty-seven studies were reviewed, and more than 60 state-of-the-art and low-cost IEQ sensors identified. Studies were found to focus on the home or workplace, but not both. This review also found how wearable technology could be used to augment IEQ measurements, creating personalised approaches to health and wellbeing. Opportunities exist to make individuals the primary unit of analysis. Future research should explore holistic personalised approaches to health monitoring in buildings that analyse the individual as they move between environments.",
    keywords: [
      "Commercial Building",
      "Residential Building",
      "Internet of Things (IoT)",
      "Health",
      "Wellbeing",
      "Indoor Environmental Quality (IEQ)",
    ],
    authorType: "First Author",
  },
  {
    title: "Just find it: The Mymo approach to recommend running shoes",
    publicationType: "Journel Article",
    publicationDate: new Date(2020, 5, 12),
    publisher: "IEEE ENGINEERING IN MEDICINE AND BIOLOGY SOCIETY",
    doi: "https://doi.org/10.1109/ACCESS.2020.3002075",
    abstract:
      "Wearing inappropriate running shoes may lead to unnecessary injury through continued strain upon the lower extremities; potentially damaging a runner’s performance. Many technologies have been developed for accurate shoe recommendation, which centre on running gait analysis. However, these often require supervised use in the laboratory/shop or exhibit too high a cost for personal use. This work addresses the need for a deployable, inexpensive product with the ability to accurately assess running shoe-type recommendation. This was achieved through quantitative analysis of the running gait from 203 individuals through use of a tri-axial accelerometer and tri-axial gyroscope-based wearable (Mymo). In combination with a custom neural network to provide the shoe-type classifications running within the cloud, we experience an accuracy of 94.6% in classifying the correct type of shoe across unseen test data.",
    keywords: ["Deep Learning", "Gait Analysis", "Inertial Measurement Unit (IMU)", "Foot PronationRunning Shoes"],
    authorType: "Co-Author",
  },
  {
    title: "Towards remote healthcare monitoring using accessible IoT technology: state‑of‑the‑art, insights and experimental design",
    publicationType: "Journel Article",
    publicationDate: new Date(2020, 9, 30),
    publisher: "Biomedical Engineering Online",
    doi: "https://doi.org/10.1186/s12938-020-00825-9",
    abstract:
      "Healthcare studies are moving toward individualised measurement. There is need to move beyond supervised assessments in the laboratory/clinic. Longitudinal free-living assessment can provide a wealth of information on patient pathology and habitual behaviour, but cost and complexity of equipment have typically been a barrier. Lack of supervised conditions within free-living assessment means there is need to augment these studies with environmental analysis to provide context to individual measurements. This paper reviews low-cost and accessible Internet of Things (IoT) technologies with the aim of informing biomedical engineers of possibilities, workflows and limitations they present. In doing so, we evidence their use within healthcare research through literature and experimentation. As hardware becomes more affordable and feature rich, the cost of data magnifies. This can be limiting for biomedical engineers exploring low-cost solutions as data costs can make IoT approaches unscalable. IoT technologies can be exploited by biomedical engineers, but more research is needed before these technologies can become commonplace for clinicians and healthcare practitioners. It is hoped that the insights provided by this paper will better equip biomedical engineers to lead and monitor multi-disciplinary research investigations.",
    keywords: ["Cloud Connectivity", "Gait", "Remote Monitoring", "Sensors", "Wearables"],
    authorType: "First Author",
  },
  {
    title: "Lifting Lockdown: Insights and experimentation into IoT opportunities for remote healthcare monitoring",
    publicationType: "Poster Presentation",
    publicationDate: new Date(2020, 10, 13),
    publisher: "North East Post-Graduate Conference 2020",
    doi: "https://doi.org/10.6084/m9.figshare.8299424.v1",
    abstract:
      "COVID-19 highlights the need for a paradigm shift in healthcare research, moving from laboratories/clinics to remote assessment (i.e. home). Restrictions imposed by COVID often result in a cessation of clinical research. Previously, proposals for remote individualised measurement at scale were made but cost and complexity of physiological and environmental sensing made this unfeasible. Internet of Things (IoT) technologies are increasing feasibility, making it more achievable and affordable to conduct remote monitoring. This removes dependency on clinics/laboratories and longitudinal free-living assessment can provide an abundance of information on habitual behaviours and pathology characteristics, often not attainable during supervised assessments. Here, we reviewed emergent low-cost/accessible IoT technologies to inform healthcare researchers about opportunities and constraints. Through experimentation, we explored and demonstrate workflows for individualised remote monitoring with wearables alongside environmental conditions of the buildings they occupy. We also explored the costs associated with cloud platforms and explored the ThingSpeak platform - as an extension of MATLAB to identify its suitability within healthcare research. We found that data/computer science are becoming increasingly common in healthcare, which is resulting in more reliance on multi-disciplinary teams to make innovations with disruptive IoT technologies. The latter enable researchers to experiment with low-cost devices that incorporate a range of sensors for monitoring patients and the environments they inhabit. However, the requirement for high-frequency data (often required in healthcare research, e.g. electrocardiogram, gait analysis) are challenging with current technologies. More research is needed to identify workflows that make low-cost IoT technologies feasible to healthcare researchers measuring high-frequency physiological data f rom wearables. Alternatively, environmental data is readily attainable f rom current technologies, which would be useful to provide context and greater insights to free-living physiological/wearable assessments.",
    keywords: ["Healthcare", "Remote Monitoring", "Gait", "Internet of Things (IoT)", "Free Living"],
    authorType: "First Author",
  },
  {
    title: "Low-cost, multimodal environmental monitoring based on the Internet of Things",
    publicationType: "Journal Article",
    publicationDate: new Date(2021, 4, 31),
    publisher: "Building and Environment",
    doi: "https://doi.org/10.1016/j.buildenv.2021.108014",
    abstract:
      "Monitoring Indoor Environmental Quality (IEQ) is of growing interest for health and wellbeing. New building standards, climate targets and adoption of homeworking strategies are creating needs for scalable, monitoring solutions with onward Cloud connectivity. Low-cost Micro-Electromechanical Systems (MEMS) sensors have potential to address these needs, enabling development of bespoke multimodal devices. Here, we present insights into the development of a MEMS-based Internet of things (IoT) enabled multimodal device for IEQ monitoring. A study was conducted to establish the inter-device variability and validity to reference standard sensors/devices. For the multimodal, IEQ monitor, intraclass correlations and Bland-Altman analyses indicated good inter-sensor reliability and good-to-excellent agreement for most sensors. All low-cost sensors were found to respond to environmental changes. Many sensors reported low accuracy but high precision meaning they could be calibrated against reference sensors to increase accuracy. The multimodal device developed here was identified as being fit-for-purpose, providing general indicators of environmental changes for continuous IEQ monitoring.",
    keywords: ["Indoor Environmental Quality (IEQ)", "Sensor fusion", "Multimodal", "Internet of Things (IoT)", "Building performance"],
    authorType: "First Author",
  },
  {
    title: "Frameworks: integration to digital networks and beyond",
    publicationType: "Book Chapter",
    publicationDate: new Date(2021, 6, 9),
    publisher: "Elsevier Press",
    doi: "https://doi.org/10.1016/B978-0-12-818914-6.00003-X",
    abstract:
      "Wearable health technologies are becoming pervasive in modern society, due to cost, marketing strategies and the gamification of health. Consequently, these devices have become an interest to healthcare researchers and medical professionals. However, these devices typically come with their own proprietary software—standalone technology that makes daily use for patient management difficult. Challenges surrounding data access present steep learning curves and barriers to entry for many researchers, with computer science commonly being a prerequisite. This chapter explores frameworks for wearable technologies and does so from two angles. The first angle explores the concept of frameworks from the position of systems and data management, that is, software frameworks. In this regard, the chapter presents the challenges and complexities researchers may face when attempting to extract data from these devices. We present several approaches to that researchers can use to collect data, which cater for different levels of technological capability. In presenting these approaches, the lack of digital frameworks, in the context of standardization and governance, is identified. This presents the second angle of frameworks explored by this chapter. There is a need for a National Digital Framework that is tailor-made for wearable technology, but the complexity and heterogeneity of current digital frameworks is indicative of how challenging this process will be. By exposing these needs and presenting researchers with a range of approaches for wearable technology data extraction, it is hoped that researchers of any specialism can drive the research and development of wearable health technologies and the frameworks that underpin them.",
    keywords: [
      "Internet of Things (IoT)",
      "Wearable Health Technology",
      "Personal Fitness Tracker (PFT)",
      "framework",
      "National Digital Framework",
      "Daily Patient Management",
      "Accessible Technology",
    ],
    authorType: "First Author",
  },
  {
    title: "IoT in the Wild: An expedition of discovery for remote monitoring.",
    publicationType: "Conference Proceedings",
    publicationDate: new Date(2021, 8, 26),
    publisher: "UbiComp/ISWC 2021",
    doi: "https://doi.org/10.1145/3460418.3479364",
    abstract:
      "Free-living assessment and remote monitoring is important for healthcare researchers. Moving research beyond the laboratory provides habitual environments for remote assessment that allows research to remain agile even when facing uncontrollable external factors e.g., the SARS-COV-2 pandemic. Emergent technologies have the potential to make this form of assessment feasible by providing accessible and affordable mechanisms for conducting free-living research. This paper presents findings from a study that was halted due to the pandemic, but this work highlighted a series of challenges that may present themselves to researchers conducting similar work. By transparently reporting the challenges and solutions rather than just methods, it is hoped that the lessons learned from this study could provide researchers with greater awareness in future studies.",
    keywords: ["Indoor Environmental Quality (IEQ)", "Internet of Things (IoT)", "Ubiquitous Sensing", "n-of-1", "pilot"],
    authorType: "First Author",
  },
  {
    title: "A protocol for longitudinal monitoring of individual building occupants and their environments",
    publicationType: "Journal Article",
    publicationDate: new Date(2022, 8, 23),
    publisher: "PLOS ONE",
    doi: "https://doi.org/10.1371/journal.pone.0274015",
    abstract:
      "Buildings account for approximately 40% of the energy consumption across the European Union, so there is a requirement to strive for better energy performance to reduce the global impact of urbanised societies. However, energy performant buildings can negatively impact building occupants (e.g., comfort, health and/or wellbeing) due to a trade-off between airtightness and air circulation. Thus, there is a need to monitor Indoor Environmental Quality (IEQ) to inform how it impacts occupants and hence redefine value within building performance metrics. An individualised study design would enable researchers to gain new insights into the effects of environmental changes on individuals for more targeted e.g., health interventions or nuanced and improved building design(s). This paper presents a protocol to conduct longitudinal monitoring of an individual and their immediate environment. Additionally, a novel approach to environmental perception gathering is proposed that will monitor environmental factors at an individual level to investigate subjective survey data pertaining to the participant’s perceptions of IEQ (e.g., perceived air quality, thermal conditions, light, and noise). This protocol has the potential to expose time-differential phenomena between environmental changes and an individual’s behavioural and physiological responses. This could be used to support building performance monitoring by providing an interventional assessment of building performance renovations. In the future it could also provide building scientists with a scalable approach for environmental monitoring that focuses specifically on individual health and wellbeing.",
    keywords: ["Protocol", "Indoor Environmental Quality (IEQ)", "Internet of Things (IoT)", "n-of-1", "Methodology"],
    authorType: "First Author",
  },
  {
    title: "Personalised and Sustainable IEQ Monitoring: Use of Multi-Modal and Pervasive Technologies",
    publicationType: "Journal Article",
    publicationDate: new Date(2023, 2, 1),
    publisher: "International Journal of Environmental Research and Public Health",
    doi: "https://doi.org/10.3390/ijerph20064897",
    abstract:
      "Background: Monitoring indoor environmental quality (IEQ) is important to better understand occupant health. Passive IEQ monitoring with digital technologies may provide insightful quantitative data to better inform, e.g., health interventions. Yet, many traditional approaches with known IEQ technologies have limited utility due to high costs or coarse granularity—focusing on the collective rather than individuals. Equally, subjective approaches (e.g., manual surveys) have poor adherence (i.e., are burdensome). There is a need for holistic IEQ measurement techniques that are sustainable (affordable, i.e., low-cost) and personalised. Here, the aim of this case report is to explore the use of low-cost digital approaches to gather personalised quantitative and qualitative data. Methods: This study deploys a personalised monitoring approach with IEQ devices coupled to wearables, weather data, and qualitative data, captured through a post-study interview. Results: The mixed-method, single-case approach gathered data continuously for six months with a reduced burden, by using digital technologies to affirm environmental factors, which were subjectively evaluated by the participant. Quantitative data reinforced qualitative data, removing the need for generalising qualitative findings against a collective. Conclusions: This study showed that the single-case, mixed-method approach used here can provide a holistic approach not previously obtainable with traditional pen-and-paper techniques alone. The use of a low-cost multi-modal device linked with common home and wearable technology suggest a contemporary and sustainable IEQ measurement approach that could inform future work to better determine occupant health.",
    keywords: [
      "Indoor Environmental Quality (IEQ)",
      "Personalised Assessment",
      "Multi-modal Monitoring",
      "Sensors",
      "Internet of Things (IoT)",
      "Building Occupants",
    ],
    authorType: "First Author",
  },
];

export default function Publications() {
  return (
    <>
      <section className="resume-section" id="publications">
        <div className="resume-section-content">
          <h2 className="mb-5 text-dark">Publications</h2>
          {publicationItems
            .sort((a: IPublicationItem, b: IPublicationItem) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
            .map((item: IPublicationItem, i: number) => (
              <PublicationItem key={`publication-item-${i}`} item={item} />
            ))}
        </div>
      </section>
    </>
  );
}
