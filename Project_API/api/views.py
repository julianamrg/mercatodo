from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Product
import json

# Create your views here.

class ProductView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            products = list(Product.objects.filter(pro_id=id).values())
            if len(products) > 0:
                product = products[0]
                datos = {'message': "Success", 'product': product}
            else:
                datos = {'message': "Product not found..."}
            return JsonResponse(datos)
        else:
            products = list(Product.objects.values())
            if len(products) > 0:
                datos = {'message': "Success", 'products': products}
            else:
                datos = {'message': "Products not found..."}
            return JsonResponse(datos)

    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Product.objects.create(pro_name=jd['pro_name'], pro_provider=jd['pro_provider'], pro_existences=jd['pro_existences'], pro_date=jd['pro_date'], pro_description=jd['pro_description'], pro_category=jd['pro_category'])
        datos = {'message': "Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        products = list(Product.objects.filter(pro_id=id).values())
        if len(products) > 0:
            product = Product.objects.get(pro_id=id)
            product.pro_name = jd['pro_name']
            product.pro_provider = jd['pro_provider']
            product.pro_existences = jd['pro_existences']
            product.pro_date = jd['pro_date']
            product.pro_description = jd['pro_description']
            product.pro_category = jd['pro_category']
            product.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Product not found..."}
        return JsonResponse(datos)

    def delete(self, request, id):
        products = list(Product.objects.filter(pro_id=id).values())
        if len(products) > 0:
            Product.objects.filter(pro_id=id).delete()
            datos = {'message': "Success"}
        else:
            datos = {'message': "Product not found..."}
        return JsonResponse(datos)