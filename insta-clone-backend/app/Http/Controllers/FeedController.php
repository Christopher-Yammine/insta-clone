<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeedController extends Controller
{
    public function create_post(Request $req)
    {

        if ($req->hasFile('post_image')) {
            $req->validate([
                "post_image" => 'image|max:6000'
            ]);
            $file = $req->file('post_image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('images/posts'), $filename);
        }
        $post = Post::create([
            'caption' => $req->caption,
            'image_name' => $filename,
            'user_id' => Auth::id()
        ]);
        return response()->json([
            'status' => 'posted',
            'post' => $post
        ], 200);
    }
    public function display_feed()
    {
        $user = User::find(Auth::id());
        $feed = $user->following()->with("posts")->get();
        return response()->json([
            "feed" => $feed
        ]);
    }
    public function get_profile_feed($id = null)
    {
        $id = $id ?? Auth::id();
        $user = User::find($id);
        $user_posts = $user->posts;
        $post_count = $user->posts()->count();
        $user_followers = $user->followers()->count();
        $user_following = $user->following()->count();

        return response()->json([
            "profile_posts"=>$user_posts,
            "posts_count"=>$post_count,
            "followers"=>$user_followers,
            "following"=>$user_following
        ]);
    }
}
