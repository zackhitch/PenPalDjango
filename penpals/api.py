from rest_framework import serializers, viewsets
from .models import PenPal, Address, Letter


           




class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('street_address', 'city', 'state',
                  'zipcode', 'notes')

    def create(self, validated_data):
        # import pdb
        # pdb.set_trace()
        user = self.context['request'].user
        address = Address.objects.create(
            user=user, **validated_data)
        return address


class AddressViewSet(viewsets.ModelViewSet):

    serializer_class = AddressSerializer
    queryset = Address.objects.all()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return Address.objects.none()

        else:
            return Address.objects.filter(user=user)

class PenPalSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    class Meta:
        model = PenPal
        fields = ('name', 'address')

    def create(self, validated_data):
        # import pdb
        # pdb.set_trace()
        address_data = validated_data.pop('address')
        user = self.context['request'].user
        address = Address.objects.create(penpal=penpal, **address_data)
        penpal = PenPal.objects.create(address=address,
            user=user, **validated_data)
        return penpal


class PenPalViewSet(viewsets.ModelViewSet):

    serializer_class = PenPalSerializer
    queryset = PenPal.objects.all()

    def get_queryset(self):
        user = self.request.user
        if user.is_anonymous:
            return PenPal.objects.none()
        else:
            penpal = PenPal.objects.filter(user=user)
            return penpal


class LetterSerializer(serializers.HyperlinkedModelSerializer):
    penpal = PenPalSerializer()
    class Meta:
        model = Letter
        fields = ('date', 'outbound', 'penpal')

    def create(self, validated_data):
        # import pdb
        # pdb.set_trace()
        penpal_data = validated_data.pop('penpal')
        user = self.context['request'].user
        letter = Letter.objects.create(
            user=user, **validated_data)
            
        return letter


class LetterViewSet(viewsets.ModelViewSet):

    serializer_class = LetterSerializer
    queryset = Letter.objects.all()

    # def get_queryset(self):
    #     user = self.request.user

    #     if user.is_anonymous:
    #         return Letter.objects.none()
    #     else:
    #         return Letter.objects.filter(user=user)