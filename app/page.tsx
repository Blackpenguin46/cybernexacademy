import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { BellIcon, BotIcon, MessageCircleIcon, Package2Icon, UserIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Button className="w-full justify-start" variant="ghost">
              <Package2Icon className="mr-2 h-4 w-4" />
              AI Chat History
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Button className="w-full justify-start font-normal" variant="ghost">
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Chat 1
              </Button>
              <Button className="w-full justify-start font-normal" variant="ghost">
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Chat 2
              </Button>
              <Button className="w-full justify-start font-normal" variant="ghost">
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Chat 3
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Button size="icon" variant="ghost">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Button>
          <div className="w-full flex-1">
            <h1 className="font-semibold text-lg">AI Chat History</h1>
          </div>
          <Button size="icon" variant="ghost">
            <BellIcon className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button size="icon" variant="ghost">
            <UserIcon className="h-6 w-6" />
            <span className="sr-only">Profile</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Chat Settings</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="model">Model</Label>
                  <Select>
                    <SelectTrigger id="model">
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" placeholder="Enter temperature" type="number" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chat History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <UserIcon className="mt-1 h-6 w-6" />
                      <div className="grid gap-1.5">
                        <div className="text-sm font-medium">You</div>
                        <div className="text-sm">What is the meaning of life?</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <BotIcon className="mt-1 h-6 w-6" />
                      <div className="grid gap-1.5">
                        <div className="text-sm font-medium">Assistant</div>
                        <div className="text-sm">
                          The meaning of life is a philosophical and subjective question that has been pondered throughout
                          human history. Different perspectives offer various interpretations...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
} 