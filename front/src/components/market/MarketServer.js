const API_URL_get = "https://jsonplaceholder.typicode.com/todos/";
const API_URL_post = "https://jsonplaceholder.typicode.com/posts";

export const listMarket = async () => {
    return await fetch(API_URL_get);
};

export const getProduct = async (id) => {
    return await fetch(`${API_URL_get}/${id}`);
};

export const registerProduct = async (newProduct) => {
    return await fetch(API_URL_post, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: parseInt(newProduct.id),
            description: String(newProduct.description).trim(),
            category: String(newProduct.category).trim(),
            amount: parseInt(newProduct.amount),
            provider: String(newProduct.provider).trim(),
            date: String(newProduct.date).trim(),
        }),
    });
};

export const updateProduct = async (id, updateMarket) => {
    return await fetch(`${API_URL_get}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: parseInt(updateMarket.id),
            description: String(updateMarket.description).trim(),
            category: String(updateMarket.category).trim(),
            amount: parseInt(updateMarket.amount),
            provider: String(updateMarket.provider).trim(),
            date: String(updateMarket.date).trim(),
        }),
    });
};

export const deleteProduct = async (id) => {
    return await fetch(`${API_URL_post}/${id}`, {
        method: "DELETE",
    });
};
