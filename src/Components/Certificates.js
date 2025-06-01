import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { React } from "react";
import { useInView } from "react-intersection-observer";
import dataJson from "../Configs/JSON/Certificates.json";
import "../Styles/Certificates.less";
import LakshyaLogo from "../Assests/Lakshya.jpg";
import MacstakLogo from "../Assests/Macstak.jpg";
import linkImg from "../Assests/Projects/link.png";

const Certificates = observer(() => {
	const [ref, inView] = useInView();
	const certificates = dataJson.Certificates;

	const handleCertificateModal = (data) => {
		window.open(data.link, "_blank");
	};
	return (
		<>
			<motion.div
				className="RolesSection"
				ref={ref}
				style={{
					transform: inView ? "none" : "translateX(200px)",
					opacity: inView ? 1 : 0,
					transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
				}}
				id="Roles"
			>
				<div className="RolesSectionContainer">
					<div className="RolesHeading">Roles of Responsibilities</div>
					<div className="RolesMainSectionCard">
						<div className="RolesFirstSectionCard RolesCard">
							<div className="RolesImage">
								<img className="RolesCardImage" src={LakshyaLogo} alt="LakshyaLogo" />
							</div>
							<div className="RolesDescription">
								<div className="RolesCardHeading">
									Senior Executive Member | ( 2023-2024 )
									<span className="clubs">
										Lakshya - The Departmental Society
										{/* <a href="https://www.instagram.com/p/Cfbu6l0JnDk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
											<img src={linkImg} alt="linkImg" />
										</a> */}
									</span>
								</div>
								<div className="RolesCardDescription">
									Played a key role in engaging students through a variety of activities, including debates, cultural events, seminars, and workshops, all aimed at fostering learning and holistic growth. Contributed across all stages of event planning—from poster design and content creation to marketing and execution. Led the successful organization of flagship events such as <i> Razm – Hindi Sansadiya Waad Vivaad</i> (held for the first time in the college) and the annual fest <i>Antra</i>, significantly enhancing student participation and campus involvement. Also helped expand the society’s reach into creative domains like pottery workshops and content writing, promoting all-round student engagement.
								</div>
							</div>
						</div>
						<div className="RolesSecondSectionCard RolesCard">
							<div className="RolesImage">
								<img className="RolesCardImage" src={MacstakLogo} alt="MacstakLogo" />
							</div>
							<div className="RolesDescription">
								<div className="RolesCardHeading">
									Co-ordinator | (2023-2024){" "}
									<span className="clubs">
										Macstack - The Tech Society{" "}
										{/* <a href="https://www.instagram.com/p/CUcFkqJBVA3/?img_index=3">
											<img src={linkImg} alt="linkImg" />
										</a> */}
									</span>
								</div>
								<div className="RolesCardDescription">
									Organized diverse tech workshops, seminars, and competitions to spark interest and develop practical skills among students. Led planning and execution of engaging events, including fun tech challenges during the annual fest to increase campus participation. Managed all stages of event planning—from ideation and promotion to coordination and execution—driving strong student involvement and positive feedback.
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="CertificatesSection" id="Certificates">
				<div className="CertificatesSectionContainer">
					<div className="CertificateHeading">Certifications</div>
					<div className="CertificatesMainSectionCard">
						<div className="CertificatesSectionCard">
							{certificates.map((certificate, index) => {
								return (
									<>
										<div className="CertificatesSectionCardImage" onClick={handleCertificateModal.bind(this, certificate)} key={index}>
											<img src={require(`../Assests/Certificates/${certificate.image}`)} alt={certificate.name} />
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
});

export default Certificates;
