'use client'

import { useState } from 'react'
import { Comment } from '../../public/types/type'
import { User, Trash2 } from 'lucide-react'

export default function CommentSection({ postId, initialComments }: { postId: string, initialComments: Comment[] }) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  console.log("Post ID:", postId);
  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        content: newComment,
        author: 'Anonymous',
        date: new Date().toISOString(),
      }
      setComments([...comments, comment])
      setNewComment('')
      // Here you would typically send a request to your backend to save the comment
    }
  }

  const deleteComment = (commentId: string) => {
    setComments(comments.filter(comment => comment.id !== commentId))
    // Here you would typically send a request to your backend to delete the comment
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">{comment.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{comment.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(comment.date).toLocaleDateString()}</span>
              </div>
              <button
                onClick={() => deleteComment(comment.id)}
                className="text-red-600 hover:text-red-800 transition-colors flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border  text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          rows={4}
          placeholder="Add a comment..."
        ></textarea>
        <button
          onClick={addComment}
          className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Add Comment
        </button>
      </div>
    </div>
  )
}

