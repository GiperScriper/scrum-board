from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from rest_framework import views, status
from rest_framework.response import Response

import json


@csrf_exempt
def auth_login(request):
	user_data = json.loads(str(request.body, 'utf-8'))
	
	username = user_data.get('username', None)
	password = user_data.get('password', None)

	account = authenticate(username=username, password=password)

	print(account.is_active)

	#return Response({'message': 1})
	if account is not None:
		if account.is_active:
			login(request, account)
			return redirect("/demo")
		#return Response({'message': 1})
        #         serialized = AccountSerializer(account)

        #         return Response(serialized.data)
        #     else:
        #         return Response({
        #             'status': 'Unauthorized',
        #             'message': 'This account has been disabled.'
        #         }, status=status.HTTP_401_UNAUTHORIZED)
        # else:
        #     return Response({
        #         'status': 'Unauthorized',
        #         'message': 'Username/password combination invalid.'
        #     }, status=status.HTTP_401_UNAUTHORIZED)		
