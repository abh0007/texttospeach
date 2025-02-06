export default function Blog() {
    const posts = [
      {
        id: 1,
        title: 'Top 10 Uses of AI Text-to-Speech in 2024',
        content: 'AI voice technology is revolutionizing...',
        date: 'May 20, 2024'
      },
      // Add more blog posts here
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest Blog Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="mb-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.content}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        ))}
      </div>
    );
  }