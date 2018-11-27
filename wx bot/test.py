from wxpy import *
import threading
bot = Bot(True)

@bot.register()
def send_to_file(msgs):
	file_data = "data.txt"
	with open(file_data, "w") as f:
		for msg in msgs:
			if msg.type == "Sharing":
				print(msg)
				print(msg.url)
				f.write(msg.url+'\n')
		f.close()

def repeat():

	print("Running!")
	send_to_file(bot.messages)
	timer = threading.Timer(10, repeat)
	timer.start()

repeat()


'''
for msg in msgs:
				msgstr = str(msg)
				typestr = str(msg.type)
				print("start writint in file/n")
				f.writelines(msgstr)
				f.write(typestr)
				print("end writing in file/n")
				print(msg)
				print(msg.type)
'''
'''
f.writelines(msgs)
			print(msgs)
			print(msgs)
			for msg in msgs:
				print(msg.type)
				typestr = str(msg.type)
				f.write(typestr)
				'''