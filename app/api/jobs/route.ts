import { NextResponse } from 'next/server'

// This is a mock function. In a real-world scenario, you would implement
// actual API calls to LinkedIn, Indeed, etc.
async function fetchJobsFromAPIs(jobType: string) {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock data
  const jobs = [
    {
      id: '1',
      title: jobType === 'internship' ? 'Cybersecurity Intern' : 'Cybersecurity Analyst',
      company: 'TechSafe Solutions',
      location: 'Remote',
      url: 'https://example.com/job1',
      source: 'LinkedIn'
    },
    {
      id: '2',
      title: jobType === 'internship' ? 'IT Security Intern' : 'Information Security Specialist',
      company: 'SecureNet Inc.',
      location: 'New York, NY',
      url: 'https://example.com/job2',
      source: 'Indeed'
    },
    // Add more mock jobs as needed
  ]

  return jobs
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const jobType = searchParams.get('type')

  if (!jobType || (jobType !== 'internship' && jobType !== 'job')) {
    return NextResponse.json({ error: 'Invalid job type' }, { status: 400 })
  }

  try {
    const jobs = await fetchJobsFromAPIs(jobType)
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

