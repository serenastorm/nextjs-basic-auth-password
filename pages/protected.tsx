import { Layout, Link, Page, Text } from "@vercel/examples-ui";

export default function Protected() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Password-protected page
      </Text>
      <Text variant="body" className="mt-6 mb-6">
        You should not be able to see this if you didn’t enter a password.
      </Text>
      <Link href="/">Back to homepage</Link>
    </Page>
  );
}

Protected.Layout = Layout;
