import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function SecureCodeReviewToolProject() {
  return (
    <ProjectWalkthrough
      title="Secure Code Review Tool"
      description="Create an automated tool for identifying common security vulnerabilities in source code. Learn about static code analysis, secure coding practices, and code parsing techniques."
      difficulty="Advanced"
      category="Application Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: ast, pylint, bandit."
        },
        {
          title: "Parse Source Code",
          description: "Use Python's ast module to analyze code structure: import ast; tree = ast.parse(source_code)"
        },
        {
          title: "Implement Vulnerability Checks",
          description: "Create functions to detect common vulnerabilities like SQL injection, XSS, and CSRF."
        },
        {
          title: "Integrate Static Analysis Tools",
          description: "Use pylint and bandit to perform additional security checks on the code."
        },
        {
          title: "Develop Custom Rules",
          description: "Create custom rules to check for project-specific security requirements or best practices."
        },
        {
          title: "Generate Comprehensive Report",
          description: "Produce a detailed report of findings, including vulnerability descriptions, affected code snippets, and remediation suggestions."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_secure_code_review_tool"
      onlineResources={[
        {
          title: "Python AST Module Documentation",
          url: "https://docs.python.org/3/library/ast.html"
        },
        {
          title: "Pylint Documentation",
          url: "https://pylint.pycqa.org/en/latest/"
        },
        {
          title: "Bandit Documentation",
          url: "https://bandit.readthedocs.io/en/latest/"
        }
      ]}
    />
  )
}

