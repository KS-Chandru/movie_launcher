"use client";

export async function login({ email, password }) {
  // Fake auth: accept any non-empty email/password
  return new Promise((resolve, reject) => {
    if (!email || !password) return reject(new Error("Missing credentials"));
    const token = btoa(`${email}:${Date.now()}`);
    const user = { email };
    localStorage.setItem("auth-token", token);
    localStorage.setItem("auth-user", JSON.stringify(user));
    resolve({ ok: true, token, user });
  });
}

export async function signup({ email, password }) {
  // Fake signup: mirror login behavior
  return new Promise((resolve, reject) => {
    if (!email || !password) return reject(new Error("Missing fields"));
    const token = btoa(`${email}:${Date.now()}`);
    const user = { email };
    localStorage.setItem("auth-token", token);
    localStorage.setItem("auth-user", JSON.stringify(user));
    resolve({ ok: true, token, user });
  });
}

export function logout() {
  localStorage.removeItem("auth-token");
  localStorage.removeItem("auth-user");
}

export function getUser() {
  try {
    const raw = localStorage.getItem("auth-user");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function isAuthenticated() {
  return !!localStorage.getItem("auth-token");
}
