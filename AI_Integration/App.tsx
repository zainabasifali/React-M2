import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const BACKEND_URL = 'http://192.168.100.8:3000/ask';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer('⚠️ Could not connect to server. Make sure backend is running.');
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.header}>🚗 Vehicle AI Assistant</Text>

      <TextInput
        style={styles.input}
        placeholder="Ask something about cars, bikes, engines..."
        value={question}
        onChangeText={setQuestion}
      />

      <Button title="Ask" onPress={handleAsk} />

      <ScrollView style={styles.output}>
        {loading ? (
          <Text style={styles.answer}>Loading...</Text>
        ) : (
          <Text style={styles.answer}>{answer}</Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  output: {
    marginTop: 20,
    flex: 1,
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});

export default App;
