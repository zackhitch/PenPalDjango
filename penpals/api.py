from rest_framework import serializers, viewsets
from .models import PenPal, Address, Letter


class PenPalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PenPal
        fields = ('name', 'address')

    def create(self, validated_data):
        # import pdb
        # pdb.set_trace()
        user = self.context['request'].user
        penpal = PenPal.objects.create(
            user=user, **validated_data)
        return penpal


class PenPalViewSet(viewsets.ModelViewSet):

    serializer_class = PenPalSerializer
    queryset = PenPal.objects.all()

    def get_queryset(self):
        user = self.user
        if user.is_anonymous:
            return PenPal.objects.none()
        else:
            return PenPal.objects.filter(user=user)


class LetterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Letter
        fields = ('date', 'outbound', 'penpal')

    def create(self, validated_data):
        # import pdb
        # pdb.set_trace()
        user = self.context['request'].user
        letter = Letter.objects.create(
            user=user, **validated_data)
        return letter


class LetterViewSet(viewsets.ModelViewSet):

    serializer_class = LetterSerializer
    queryset = Letter.objects.all()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return Letter.objects.none()
        else:
            return Letter.objects.filter(user=user)


class AddressSerializer(serializers.HyperlinkedModelSerializer):
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
