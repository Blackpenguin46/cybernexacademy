import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function NetworkIDSProject() {
  return (
    <ProjectWalkthrough
      title="Create a Network Intrusion Detection System (NIDS)"
      description="Implement a basic NIDS using machine learning algorithms. This advanced project will cover network traffic analysis, anomaly detection, and machine learning basics."
      difficulty="Advanced"
      category="Network Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: scapy, pandas, scikit-learn."
        },
        {
          title: "Capture Network Traffic",
          description: "Use scapy to capture packets and extract features (e.g., packet size, protocol)."
        },
        {
          title: "Prepare Dataset",
          description: "Label network traffic as normal or anomalous. Use a dataset like NSL-KDD."
        },
        {
          title: "Train Machine Learning Model",
          description: "Use scikit-learn to train a model (e.g., decision tree) on the prepared dataset."
        },
        {
          title: "Detect Anomalies",
          description: "Use the trained model to classify new traffic as normal or anomalous."
        }
      ]}
      videoTutorial="https://www.youtube.com/embed/dQw4w9WgXcQ"
      onlineResources={[
        {
          title: "Scapy Documentation",
          url: "https://scapy.readthedocs.io/en/latest/"
        },
        {
          title: "Scikit-learn Documentation",
          url: "https://scikit-learn.org/stable/"
        },
        {
          title: "NSL-KDD Dataset",
          url: "https://www.unb.ca/cic/datasets/nsl.html"
        }
      ]}
    />
  )
}

