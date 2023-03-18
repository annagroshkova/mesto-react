class Api {
  /**
   * @param {{ baseUrl: string; headers: HeadersInit}} _options
   */
  constructor(_options) {
    this._options = _options;
  }

  /**
   * @param res {Response}
   * @returns {Promise<any>}
   */
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  /**
   * @param url {string}
   * @param options {RequestInit}
   * @returns {Promise<any>}
   */
  _request(url, options = {}) {
    return fetch(`${this._options.baseUrl}/${url}`, {
      headers: this._options.headers,
      ...options,
    }).then(this._checkResponse);
  }

  /**
   * @returns {Promise<import("../types").CardObject[]>}
   */
  getInitialCards() {
    return this._request(`cards`);
  }

  /**
   * @returns {Promise<import("../types").UserObject>}
   */
  getUserInfo() {
    return this._request(`users/me`);
  }

  /**
   * @param {{ name: string; about: string; }} user
   * @returns {Promise<import("../types").UserObject>}
   */
  patchUserInfo(user) {
    return this._request(`users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      }),
    });
  }

  /**
   * @param {string} avatar
   * @returns {Promise<import("../types").UserObject>}
   */
  patchAvatar(avatar) {
    return this._request(`users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar,
      }),
    });
  }

  /**
   * @param {import("../types").CardInput} card
   * @returns {Promise<import("../types").CardObject>}
   */
  postNewCard(card) {
    return this._request(`cards`, {
      method: 'POST',
      body: JSON.stringify(card),
    });
  }

  /**
   * @param {string} cardId
   * @returns {Promise<void>}
   */
  deleteCard(cardId) {
    return this._request(`cards/${cardId}`, {
      method: 'DELETE',
    });
  }

  /**
   * @param {string} cardId
   * @param {boolean} liked
   * @returns {Promise<import("../types").CardObject>}
   */
  likeCard(cardId, liked) {
    return this._request(`cards/${cardId}/likes`, {
      method: liked ? 'PUT' : 'DELETE',
    });
  }

  /**
   * @param {import("../types").Credentials} body
   * @returns {Promise<void>}
   */
  signup(body) {
    return this._request(`signup`, {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  /**
   * @param {import("../types").Credentials} body
   * @returns {Promise<import("../types").SigninResponse>}
   */
  signin(body) {
    return this._request(`signin`, {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  /**
   * @param {string} token
   * @returns {Promise<import("../types").MyInfoResponse>}
   */
  getMyInfo(token) {
    return this._request(`users/me`, {
      method: 'GET',
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: '5d6a4a95-3b77-4e4c-9a74-5ef0cb01a629',
    'Content-Type': 'application/json',
  },
});

export const authApi = new Api({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
})
