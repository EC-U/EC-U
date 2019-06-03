import pandas as pd
import wx
import sys, os

dataset = pd.read_csv('dataset.csv')
title=dataset['title']
publisher=dataset['publisher']
article=dataset['text']
TITLE = u'公众号文章分类'
num = dataset.shape[0]
labels = []
class mainFrame(wx.Frame):
    '''程序主窗口类，继承自wx.Frame'''
    def __init__(self, parent,history):
        '''构造函数'''
        wx.Frame.__init__(self, parent, -1, TITLE)
        self.SetBackgroundColour(wx.Colour(224, 224, 224))
        self.SetSize((700, 700))
        self.Center()
        self.id = history + 1
        wx.StaticText(self, -1, u'标题:', pos=(30, 50), size=(40, -1), style=wx.ALIGN_LEFT)
        wx.StaticText(self, -1, u'公众号:', pos=(30, 80), size=(40, -1), style=wx.ALIGN_LEFT)
        wx.StaticText(self, -1, u'正文:', pos=(30, 110), size=(40, -1), style=wx.ALIGN_LEFT)
        self.text_title = wx.StaticText(self, -1, title[self.id], pos=(80, 50), size=(400, 80), style=wx.ALIGN_LEFT^wx.ST_NO_AUTORESIZE)
        self.text_publisher = wx.StaticText(self, -1, publisher[self.id], pos=(80, 80), size=(400, 60), style=wx.ALIGN_LEFT^wx.ST_NO_AUTORESIZE)
        self.text_article = wx.StaticText(self, -1, article[self.id], pos=(80, 110), size=(400, 500), style=wx.ALIGN_LEFT^wx.ST_NO_AUTORESIZE)
        wx.StaticText(self, -1, '标签', pos=(480, 50), size=(100, 25), style=wx.ALIGN_LEFT)
        btn_label1 = wx.Button(self, 0, u'趣闻', pos=(480, 80), size=(100, 25))
        btn_label2 = wx.Button(self, 1, u'学术', pos=(480, 110), size=(100, 25))
        btn_label3 = wx.Button(self, 2, u'表演', pos=(480, 140), size=(100, 25))
        btn_label4 = wx.Button(self, 3, u'新闻', pos=(480, 170), size=(100, 25))
        btn_label5 = wx.Button(self, 4, u'娱乐', pos=(480, 200), size=(100, 25))
        btn_label6 = wx.Button(self, 5, u'资料', pos=(480, 230), size=(100, 25))
        btn_label7 = wx.Button(self, 6, u'科普', pos=(480, 260), size=(100, 25))
        btn_label8 = wx.Button(self, 7, u'其他', pos=(480, 290), size=(100, 25))
        # btn_label9 = wx.Button(self, -1, u'9', pos=(480, 320), size=(100, 25))
        # btn_label10 = wx.Button(self, -1, u'10', pos=(480, 350), size=(100, 25))
        btn_next = wx.Button(self, -1, u'下一条', pos=(480, 380), size=(100, 25))
        btn_last = wx.Button(self, -1, u'上一条', pos=(480, 410), size=(100, 25))
        btn_close = wx.Button(self, -1, u'关闭窗口', pos=(480, 450), size=(100, 25))
 
        # # 控件事件
        self.Bind(wx.EVT_BUTTON, self.OnClose, btn_close)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label1)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label2)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label3)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label4)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label5)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label6)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label7)
        self.Bind(wx.EVT_BUTTON, self.OnButtonClick, btn_label8)
        # # 鼠标事件 
        btn_next.Bind(wx.EVT_LEFT_DOWN, self.next)
        btn_last.Bind(wx.EVT_LEFT_DOWN, self.last)
        # btn_mea.Bind(wx.EVT_LEFT_UP, self.OnLeftUp)
        # btn_mea.Bind(wx.EVT_MOUSEWHEEL, self.OnMouseWheel)
        # btn_meb.Bind(wx.EVT_MOUSE_EVENTS, self.OnMouse)
 
        # # 键盘事件
        # self.Bind(wx.EVT_KEY_DOWN, self.OnKeyDown)
 
        # # 系统事件
        # self.Bind(wx.EVT_CLOSE, self.OnClose)
        # self.Bind(wx.EVT_SIZE, self.On_size)
        #self.Bind(wx.EVT_PAINT, self.On_paint)
        #self.Bind(wx.EVT_ERASE_BACKGROUND, lambda event: None)
 
    def OnButtonClick(self, evt):
        '''输入框事件函数'''
        id = evt.GetEventObject().GetLabel()
        labels.append(id)
        if (self.id < num):
            self.id += 1
        self.text_title.SetLabel(title[self.id])
        self.text_publisher.SetLabel(publisher[self.id])
        self.text_article.SetLabel(article[self.id])
 
    def On_size(self, evt):
        '''改变窗口大小事件函数'''
        self.Refresh()
        evt.Skip()
 
    def OnClose(self, evt):
        '''关闭窗口事件函数'''
        with open('logs.txt','w') as f:
            f.write(str(self.id))
        dlg = wx.MessageDialog(None, u'确定要关闭本窗口？', u'操作提示', wx.YES_NO | wx.ICON_QUESTION)
        if(dlg.ShowModal() == wx.ID_YES):
            self.Destroy()
    
    def next(self, evt):
        '''下一篇文章'''
        if(self.id < num):
            self.id += 1
        self.text_title.SetLabel(title[self.id])
        self.text_publisher.SetLabel(publisher[self.id])
        self.text_article.SetLabel(article[self.id])

    def last(self, evt):
        '''上一篇文章'''
        if (self.id > 0):
            self.id -= 1
        self.text_title.SetLabel(title[self.id])
        self.text_publisher.SetLabel(publisher[self.id])
        self.text_article.SetLabel(article[self.id])

    # def OnLeftUp(self, evt):
    #     '''左键弹起事件函数'''
    #
    #     self.tip.SetLabel(u'左键弹起')
    #
    # def OnMouseWheel(self, evt):
    #     '''鼠标滚轮事件函数'''
    #
    #     vector = evt.GetWheelRotation()
    #     self.tip.SetLabel(str(vector))
    #
    # def OnMouse(self, evt):
    #     '''鼠标事件函数'''
    #
    #     self.tip.SetLabel(str(evt.EventType))
    #
    # def OnKeyDown(self, evt):
    #     '''键盘事件函数'''
    #
    #     key = evt.GetKeyCode()
    #     self.tip.SetLabel(str(key))

class mainApp(wx.App):
    def OnInit(self):
        with open('logs.txt', 'r') as f:
            hist_id = int(f.read())
        self.SetAppName(TITLE)
        self.Frame = mainFrame(None,hist_id)
        self.Frame.Show()
        return True
 
if __name__ == "__main__":
    app = mainApp()
    app.MainLoop()
    with open("labels.txt",'a',encoding='utf-8') as f:
        f.write('\n'.join(labels))
