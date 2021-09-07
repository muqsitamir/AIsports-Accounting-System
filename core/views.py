import requests
from django.conf import settings
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView

from core.models import Product


def get(self, request, *args, **kwargs):
    headers = {
        'X-Shopify-Access-Token': settings.SHOPIFY_API_KEY
    }
    url = f'{settings.SHOPIFY_ENDPOINT}/admin/api/2021-07/products.json'

    for item in requests.get(url, headers=headers).json()['products']:
        product, _ = Product.objects.get_or_create(id=item['id'])
        product.title = item['title']
        product.brand = item['vendor']
        product.save()
    return super().get(request, *args, **kwargs)
