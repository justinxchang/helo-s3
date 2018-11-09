SELECT * FROM posts
INNER JOIN users ON posts.id = users.id

RETURNING *;