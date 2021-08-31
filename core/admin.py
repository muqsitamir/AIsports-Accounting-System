from django.contrib import admin

# Register your models here.
from core.models import Capital, Transaction, Purchase, Product, Vendor, PurchaseEntry


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'brand', )


class VendorAdmin(admin.ModelAdmin):
    list_display = ('title',)


class CapitalAdmin(admin.ModelAdmin):
    list_display = ('description', 'amount',)


class PurchaseEntryInline(admin.TabularInline):
    model = PurchaseEntry
    extra = 0


class PurchaseAdmin(admin.ModelAdmin):
    list_display = ('id', )
    inlines = [PurchaseEntryInline]


admin.site.register(Product, ProductAdmin)
admin.site.register(Capital, CapitalAdmin)
admin.site.register(Vendor, VendorAdmin)
admin.site.register(Transaction)
admin.site.register(Purchase, PurchaseAdmin)
