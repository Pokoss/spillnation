import { useForm, usePage } from '@inertiajs/inertia-react';
import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentCard({ comment }) {
    const [showReply, setShowReply] = useState(false);
    const replyRef = useRef(null);
    const { auth } = usePage().props;
    const commentForm = useForm({
        'blog_id': comment.blog_id,
        'parent_id': comment.id
    });

    const deleteComment = (id) => {
        Inertia.delete(`/posts/${post.slug}/comments/${id}/`, {}, {
            preserveScroll: true, preserveState: true
        })
    }

    const likeComment = () => {
        if (!auth.user) {
            toast.error('Login to like this comment');
            return;
        }

        commentForm.post(`like`, {
            preserveScroll: true, preserveState: true
        })
    }

    function handleClickOutside(event) {
        if (replyRef.current && !replyRef.current.contains(event.target)) {
            setShowReply(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!auth.user) {
            toast.error('Login to comment on this article');
            return;
        }

        commentForm.post(`comment`, {
            preserveScroll: true,
            onSuccess: () => {
                commentForm.setData('body', '');
                setShowReply(false);
                toast.success('Reply Sent', { autoClose: 1000 });
            }
        })
    };


    return (
        <div>
            <div className="flex space-x-4 my-2.5">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-8 h-8 rounded-full" src={comment.user.image ?? '/images/no-pfp.jpg'} alt="Neil image" />
                    <div className='h-full w-full pb-3'>
                        {comment.replies && comment.replies.length > 0 && <div className='border-l-2 border-b-2 w-1/2 h-full float-right'></div>}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate  ">
                        {comment.user.name} • 
                        <span className='text-xs font-light text-color-gray-500 ml-2'>

                        {new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                    </p>
                    <p className="text-sms  ">
                        {comment.body}
                    </p>
                    {!showReply && <div className='flex text-sm text-gray-500'>
                        <button className='hover:underline mr-5' onClick={() => setShowReply(true)}>
                            Reply
                        </button>
                        {comment.likes_count && comment.likes_count > 0 && <span>{comment.likes_count}</span>}
                        <button className='hover:underline ml-2' onClick={likeComment}>
                            {comment.liked_by_user ? 'Unlike' : 'Like'}
                        </button>
                    </div>}

                    {showReply && <form className="flex space-x-5 mb-6" ref={replyRef} onSubmit={handleSubmit}>
                        <div className="w-full bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                            <textarea id="comment" rows="1" value={commentForm.body} onChange={(event) => commentForm.setData('body', event.target.value)}
                                className="px-4 py-2 w-full text-sm  border-0 focus:ring-0 "
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="items-center px-10 text-xs font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Reply
                        </button>
                    </form>}

                    {comment.replies && comment.replies.map((reply, index) =>
                        <CommentCard key={index} comment={reply} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CommentCard