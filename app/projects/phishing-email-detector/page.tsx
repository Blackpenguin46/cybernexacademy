import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function PhishingEmailDetectorProject() {
  return (
    <ProjectWalkthrough
      title="Phishing Email Detector"
      description="Create a machine learning model to identify phishing emails. Learn about natural language processing, feature extraction, and email security."
      difficulty="Intermediate"
      category="Machine Learning Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: pandas, scikit-learn, nltk."
        },
        {
          title: "Collect Dataset",
          description: "Use a dataset of phishing and legitimate emails (e.g., from Kaggle)."
        },
        {
          title: "Preprocess Data",
          description: "Clean and tokenize email text using nltk: from nltk.tokenize import word_tokenize; tokens = word_tokenize(email_text)"
        },
        {
          title: "Extract Features",
          description: "Use TF-IDF or word embeddings to convert text into numerical features."
        },
        {
          title: "Train Model",
          description: "Train a classifier (e.g., logistic regression): from sklearn.linear_model import LogisticRegression; model = LogisticRegression(); model.fit(X_train, y_train)"
        },
        {
          title: "Test Model",
          description: "Evaluate the model on a test dataset and analyze its performance."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_phishing_detector"
      onlineResources={[
        {
          title: "NLTK Documentation",
          url: "https://www.nltk.org/"
        },
        {
          title: "Scikit-learn Documentation",
          url: "https://scikit-learn.org/stable/"
        },
        {
          title: "Kaggle Phishing Dataset",
          url: "https://www.kaggle.com/datasets/example_phishing_dataset"
        }
      ]}
    />
  )
}

