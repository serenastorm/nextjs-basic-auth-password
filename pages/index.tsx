import { Layout, Link, Page, Text, List } from "@vercel/examples-ui"

export default function Index() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Password-protected page demo
      </Text>
      <List>
        <li>Username: 4dmin</li>
        <li>Password: testpwd123</li>
      </List>
      <Link href="/protected" className="block mt-6">
        Go to password-protected page
      </Link>
    </Page>
  )
}

Index.Layout = Layout
