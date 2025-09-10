//ユーザー入力に応じたアクションの設定。

// type: アクションの名前。
// payload: 更新した後の状態を返す。
export const loginStart = (user) => ({
    type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
});

