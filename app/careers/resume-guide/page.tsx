import { FileText, CheckSquare, AlertTriangle } from 'lucide-react'

export default function ResumeGuidePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Resume Guide</h1>
      
      <div className="grid gap-8">
        <section className="bg-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Essential Components</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckSquare className="w-5 h-5 mr-2 text-green-500 mt-1" />
              <div>
                <h3 className="font-medium">Technical Skills Section</h3>
                <p className="text-sm text-muted-foreground">List relevant cybersecurity tools, technologies, and certifications</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare className="w-5 h-5 mr-2 text-green-500 mt-1" />
              <div>
                <h3 className="font-medium">Security Projects</h3>
                <p className="text-sm text-muted-foreground">Highlight personal projects, CTF competitions, and security research</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckSquare className="w-5 h-5 mr-2 text-green-500 mt-1" />
              <div>
                <h3 className="font-medium">Certifications</h3>
                <p className="text-sm text-muted-foreground">Include relevant security certifications (CompTIA Security+, CEH, CISSP, etc.)</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
              <div>
                <h3 className="font-medium">Generic Objectives</h3>
                <p className="text-sm text-muted-foreground">Avoid generic statements; be specific about your cybersecurity goals</p>
              </div>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500 mt-1" />
              <div>
                <h3 className="font-medium">Outdated Skills</h3>
                <p className="text-sm text-muted-foreground">Remove outdated or irrelevant technologies and certifications</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Resume Templates</h2>
          <div className="grid gap-4">
            <a 
              href="/templates/entry-level.docx" 
              className="flex items-center p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              <span>Entry-Level Cybersecurity Resume Template</span>
            </a>
            <a 
              href="/templates/experienced.docx" 
              className="flex items-center p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              <span>Experienced Professional Resume Template</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

