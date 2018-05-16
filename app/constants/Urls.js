'use strict';

export const REPOS_URL = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&page={0}';

export function buildUrl(page) {
    return 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&page=' + page;
}
