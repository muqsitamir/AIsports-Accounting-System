import requests
from django.conf import settings
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView

from core.models import Product


def current_capital():
    return 0


class IndexView(TemplateView):
    template_name = 'core/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['capital'] = current_capital()
        return context


class FetchView(TemplateView):
    template_name = 'core/fetch.html'

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
        return super(FetchView, self).get(request, *args, **kwargs)
