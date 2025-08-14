import howl from "@/lib/howl";


export const getUsersApi = async(page:string|number,search:string|null,token:string) => {
  return await howl({link:`/admin/get-users?per_page=10&page=${page}${search?`&search=${search}`:""}`,token})
};
export const viewUserApi = async(id:string,token:string) => {
  return await howl({link:`/admin/view-user/${id}`,token})
};
export const deleteUserApi = async(id:string,token:string) => {
  return await howl({link:`/admin/delete-user/${id}`,method:"delete",token})
};

//Quote listing


export const getQuoteListingApi = async(token:string,page:number|string) => {
  return await howl({link:`/admin/get-quote-listing?per_page=10&page=${page}`,token});
};

export const adminViewQuoteApi = async(id:string|number,token:string) => {
  return await howl({link:`/admin/view-quote/${id}`,token});
};

export const getTransactionApi = async(page:string|number,token:string) => {
  return await howl({link:`/admin/get-transactions?per_page=10&page=${page}`,token});
};

// Category APIs
export const getCategoriesApi = async (token: string, page?: string | number) => {
  const pageQuery = page ? `?per_page=10&page=${page}` : "";
  return await howl({ link: `/admin/get-categories${pageQuery}`, token });
};

export const viewCategoryApi = async (id: string | number, token: string) => {
  return await howl({ link: `/admin/view-category/${id}`, token });
};

export const addCategoryApi = async (
  token: string,
  data: { icon: string; name: string }
) => {
  return await howl({
    link: `/admin/add-category`,
    method: "post",
    token,
    data,
  });
};

export const editCategoryApi = async (
  id: string | number,
  token: string,
  data: { icon: string; name: string }
) => {
  return await howl({
    link: `/admin/edit-category/${id}`,
    method: "post", // still POST because _method:PUT will be in body
    token,
    data: { ...data, _method: "PUT" },
  });
};

export const deleteCategoryApi = async (id: string | number, token: string) => {
  return await howl({
    link: `/admin/delete-category/${id}`,
    method: "delete",
    token,
  });
};
