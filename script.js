// Fungsi untuk menyukai posting
function likePost(postId) {
  const post = posts.find((post) => post.id === postId);
  if (post) {
    // Memeriksa apakah pengguna sudah memberi like sebelumnya
    const hasLiked = post.likesInfo && post.likesInfo.includes('user');

    if (!hasLiked) {
      // Jika belum memberi like
      post.likes++;
      // Menandai bahwa pengguna ini telah memberi like
      if (!post.likesInfo) {
        post.likesInfo = [];
      }
      post.likesInfo.push('user');

      // Menyimpan data ke localStorage
      localStorage.setItem('posts', JSON.stringify(posts));
      // Merender ulang posting
      renderPosts();
    } else {
      // Jika pengguna sudah memberi like sebelumnya
      alert('Anda sudah memberi like untuk posting ini.');
    }
  }
}
