<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{
    public function follow_user(Request $req, $id)
    {
        $user_to_follow = User::find($id);
        if (!$user_to_follow) {
            return response()->json(["error" => "user not found"], 404);
        }
        $user = User::find(Auth::id());

        $user->following()->sync($id);
        return response()->json([
            "message" => "user followed successfully"
        ]);
    }
    public function unfollow_user(Request $req, $id)
    {
        $user_to_follow = User::find($id);
        if (!$user_to_follow) {
            return response()->json(["error" => "user not found"], 404);
        }

        $user = User::find(Auth::id());

        $user->following()->detach($id);
        return response()->json([
            "message" => "user unfollowed successfully"
        ]);
    }
}
