import client from '../apollo/apollo-client'
import { gql } from '@apollo/client';

// Fetch Github data (GraphQL)
export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query {
            repository(owner:"octocat", name:"Hello-World") {
            issues(last:20, states:CLOSED) {
                edges {
                node {
                    title
                    url
                    labels(first:5) {
                    edges {
                        node {
                        name
                        }
                    }
                    }
                }
                }
            }
            }
        }
      `,
    });

    return {
      props: {
        repos: data
      },
   };
}

// Test page
export default function test({ repos }) {
    return (
        <ul>
            {repos.repository.issues.edges.map(issueEdge => (
                <li key={issueEdge.node.url}>{issueEdge.node.title}</li>
            ))}
        </ul>
    )
}
