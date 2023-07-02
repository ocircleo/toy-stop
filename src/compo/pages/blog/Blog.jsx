

const Blog = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-gray-100 rounded my-4 p-6">
                <div className="bg-gray-200 rounded text-black p-3">
                    <h2 className="text-xl py-2 font-semibold">What are an access token and a refresh token? How do they work and where should we store them on the client side ?</h2>
                    A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. it can be stored in local browser storage. But Storeing it in a cookie in client side, can be safer than local browser storage.
                </div>
            </div>
            <div className="bg-gray-100 rounded my-4 p-6">
                <div className="bg-gray-200 rounded text-black p-3">
                    <h2 className="text-xl py-2 font-semibold">Compare SQL and NoSQL databases ?</h2>
                    NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are table-based.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are better for multi-row transactions.while NoSQL is better for unstructured data like documents or JSON.
                </div>
            </div>
            <div className="bg-gray-100 rounded my-4 p-6">
                <div className="bg-gray-200 rounded text-black p-3">
                    <h2 className="text-xl py-2 font-semibold">What is express js? What is Next JS ?</h2>
                    express js is framework for nodejs. Its a tool for backend devlopment for buildig web 
                    applications and restful apis.Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation
                </div>
            </div>
            <div className="bg-gray-100 rounded my-4 p-6">
                <div className="bg-gray-200 rounded text-black p-3">
                    <h2 className="text-xl py-2 font-semibold">What is MongoDB aggregate and how does it work ?</h2>
                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </div>
            </div>
        </div>
    );
};

export default Blog;