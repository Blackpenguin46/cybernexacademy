import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function SocialEngineeringSimulatorProject() {
  return (
    <ProjectWalkthrough
      title="Social Engineering Simulator"
      description="Develop a platform to simulate and educate users about social engineering attacks. Learn about human psychology, attack vectors, and security awareness training."
      difficulty="Intermediate"
      category="Social Engineering"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: flask, sqlalchemy, requests."
        },
        {
          title: "Design Attack Scenarios",
          description: "Create a variety of social engineering scenarios, including phishing emails, pretexting situations, and baiting attacks."
        },
        {
          title: "Implement User Interface",
          description: "Develop a web-based interface using Flask to present scenarios and collect user responses."
        },
        {
          title: "Create Scoring System",
          description: "Implement a scoring mechanism to evaluate user performance in identifying and responding to social engineering attempts."
        },
        {
          title: "Develop Educational Content",
          description: "Create informative content to explain social engineering techniques and best practices for prevention."
        },
        {
          title: "Implement Feedback System",
          description: "Design a system to provide immediate feedback and explanations after each simulated attack scenario."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_social_engineering_simulator"
      onlineResources={[
        {
          title: "Flask Documentation",
          url: "https://flask.palletsprojects.com/"
        },
        {
          title: "OWASP Social Engineering",
          url: "https://owasp.org/www-community/attacks/Social_Engineering"
        },
        {
          title: "Psychology of Social Engineering",
          url: "https://www.sans.org/white-papers/36697/"
        }
      ]}
    />
  )
}

