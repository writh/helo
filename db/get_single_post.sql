select * from post INNER JOIN users on post.user_id  =users.id WHERE post_id =$1