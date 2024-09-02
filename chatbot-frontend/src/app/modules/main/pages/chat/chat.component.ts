import { Component } from '@angular/core';
import { ChatbotService } from '../../service/chatbot.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  query: string = '';
  response: string = '';

  constructor(private chatbotService: ChatbotService, private http: HttpClient) { }

  sendQuery() {
    if (!this.query.includes('¿') || !this.query.includes('?')) {
      this.typewriterEffect('Por favor, usa los signos de interrogación correctamente.');
      return;
    }

    this.http.post('http://localhost:8085/api/chat/query', { query: this.query }, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          this.typewriterEffect(response);
        },
        error: (error) => {
          console.error('Error:', error);
          this.typewriterEffect('No tengo una respuesta para eso, estoy aprendiendo para brindarte un mejor servicio. Inténtalo nuevamente por favor.');
        }
      });
  }

  private typewriterEffect(text: string) {
    this.response = '';
    let index = 0;
    const speed = 50; // Velocidad de la escritura en milisegundos

    const interval = setInterval(() => {
      this.response += text.charAt(index);
      index++;
      if (index > text.length - 1) {
        clearInterval(interval);
      }
    }, speed);
  }
}
